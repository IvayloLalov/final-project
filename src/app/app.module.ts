import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    RestaurantModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
