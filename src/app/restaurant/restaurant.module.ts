import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { CurrentRestaurantComponent } from './current-restaurant/current-restaurant.component';
import { ReastaurantRoutingModule } from './restaurant-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';

@NgModule({
  declarations: [
    AddRestaurantComponent,
    RestaurantsListComponent,
    CurrentRestaurantComponent,
    EditRestaurantComponent,
  ],
  imports: [
    CommonModule,
    ReastaurantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RestaurantModule {}
