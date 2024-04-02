import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Restaurant } from 'src/types/restaurant';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  restaurants: Restaurant[] = [];
  isMatching: boolean = false;

  constructor(private api: ApiService) {}

  Search(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { search } = form.value;

    this.api.getSearchedRestaurants(search).subscribe((restaurants) => {
      this.restaurants = restaurants;
      if (this.restaurants.length > 0) {
        this.isMatching = true;
      }
    });
  }
}
