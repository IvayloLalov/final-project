import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Restaurant } from 'src/types/restaurant';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css'],
})
export class RestaurantsListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getRestaurants().subscribe((restaurants) => {
      this.restaurants = restaurants;
    });
  }
}
