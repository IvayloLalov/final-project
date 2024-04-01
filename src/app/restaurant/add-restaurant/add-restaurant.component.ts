import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    type: ['', [Validators.required, Validators.minLength(4)]],
    location: ['', [Validators.required, Validators.minLength(6)]],
    image: [
      '',
      [Validators.required, Validators.pattern('https?://.*.(png|jpeg|jpg)')],
    ],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}
  addRestaurant() {
    if (this.form.invalid) {
      return;
    }

    const { name, type, location, image, description } = this.form.value;

    this.api
      .addRestaurant(name!, type!, location!, image!, description!, [])
      .subscribe(() => {
        this.router.navigate(['/restaurants']);
      });
  }
}
