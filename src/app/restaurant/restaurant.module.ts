import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { CurrentRestaurantComponent } from './current-restaurant/current-restaurant.component';
import { ReastaurantRoutingModule } from './restaurant-routing.module';

@NgModule({
  declarations: [
    AddRestaurantComponent,
    RestaurantsListComponent,
    CurrentRestaurantComponent,
  ],
  imports: [CommonModule, ReastaurantRoutingModule],
})
export class RestaurantModule {}
