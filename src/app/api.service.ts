import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Restaurant, RestaurantForUpdate } from 'src/types/restaurant';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  dataUrl = environment.dataUrl;
  constructor(private http: HttpClient) {}

  getRestaurants() {
    return this.http.get<Restaurant[]>(`${this.dataUrl}/restaurants`);
  }

  getRestaurant(id: string) {
    return this.http.get<Restaurant>(`${this.dataUrl}/restaurants/${id}`);
  }

  addRestaurant(
    name: string,
    type: string,
    location: string,
    img: string,
    description: string
  ) {
    return this.http.post<Restaurant>(`${this.dataUrl}/restaurants`, {
      name,
      type,
      location,
      img,
      description,
    });
  }

  editRestaurant(
    name: string,
    type: string,
    location: string,
    img: string,
    description: string,
    id: string
  ) {
    return this.http.put<RestaurantForUpdate>(
      `${this.dataUrl}/restaurants/${id}`,
      {
        name,
        type,
        location,
        img,
        description,
      }
    );
  }

  deleteRestaurant(id: string) {
    return this.http.delete<Restaurant>(`${this.dataUrl}/restaurants/${id}`);
  }
}
