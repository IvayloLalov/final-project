import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Test } from 'src/types/restaurant';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css'],
})
export class RestaurantsListComponent implements OnInit {
  test: Test[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getRestaurants().subscribe((test) => {
      this.test = test;
    });
  }
}
