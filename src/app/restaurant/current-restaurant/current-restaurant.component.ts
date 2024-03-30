import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Restaurant } from 'src/types/restaurant';

@Component({
  selector: 'app-current-restaurant',
  templateUrl: './current-restaurant.component.html',
  styleUrls: ['./current-restaurant.component.css'],
})
export class CurrentRestaurantComponent implements OnInit {
  restaurant = {} as Restaurant;
  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['restaurantId'];
      this.apiService.getRestaurant(id).subscribe((restaurant) => {
        this.restaurant = restaurant;
      });
    });
  }
}
