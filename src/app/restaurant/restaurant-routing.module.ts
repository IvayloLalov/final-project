import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { CurrentRestaurantComponent } from './current-restaurant/current-restaurant.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'restaurants',
    children: [
      { path: '', pathMatch: 'full', component: RestaurantsListComponent },
      {
        path: ':restaurantId',
        component: CurrentRestaurantComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'add-restaurant',
    component: AddRestaurantComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReastaurantRoutingModule {}
