import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Restaurant, RestaurantForUpdate } from 'src/types/restaurant';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css'],
})
export class EditRestaurantComponent implements OnInit {
  restaurant = {} as Restaurant;

  restaurantForUpdate: RestaurantForUpdate = {
    name: '',
    type: '',
    location: '',
    img: '',
    description: '',
  };

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    type: ['', [Validators.required, Validators.minLength(4)]],
    location: ['', [Validators.required, Validators.minLength(6)]],
    img: [
      '',
      [Validators.required, Validators.pattern('https?://.*.(png|jpeg|jpg)')],
    ],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['restaurantId'];
      this.apiService.getRestaurant(id).subscribe((restaurant) => {
        this.restaurant = restaurant;
        const { name, type, location, img, description } = restaurant;
        this.restaurantForUpdate = { name, type, location, img, description };
        this.form.setValue({
          name,
          type,
          location,
          img,
          description,
        });
      });
    });
  }

  editRestaurant(): void {
    if (this.form.invalid) {
      return;
    }

    this.activeRoute.params.subscribe((data) => {
      const id = data['restaurantId'];

      this.restaurantForUpdate = this.form.value as RestaurantForUpdate;
      const { name, type, location, img, description } =
        this.restaurantForUpdate;

      this.apiService
        .editRestaurant(name, type, location, img, description, id)
        .subscribe({
          next: () => {
            this.router.navigate([`/restaurants/${id}`]);
          },
          error: () => {
            this.router.navigate(['/restaurants']);
          },
        });
    });
  }

  onCancel(e: Event): void {
    e.preventDefault();
    this.router.navigate(['/restaurants']);
  }
}
