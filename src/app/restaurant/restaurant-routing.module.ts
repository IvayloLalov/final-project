import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { CurrentRestaurantComponent } from './current-restaurant/current-restaurant.component';
import { AuthGuard } from '../guards/auth.guard';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { IsOwnerGuard } from '../guards/isOwner.guard';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'restaurants',
    children: [
      { path: '', pathMatch: 'full', component: RestaurantsListComponent },
      {
        path: ':restaurantId',
        component: CurrentRestaurantComponent,
      },
      {
        path: ':restaurantId/edit',
        component: EditRestaurantComponent,
        canActivate: [IsOwnerGuard],
      },
      {
        path: ':restaurantId/add-comment',
        component: AddCommentComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'add-restaurant',
    component: AddRestaurantComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReastaurantRoutingModule {}
