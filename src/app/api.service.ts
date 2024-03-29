import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Restaurant, Test } from 'src/types/restaurant';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getRestaurants() {
    const { dataUrl } = environment;

    return this.http.get<Test[]>(`${dataUrl}/restaurants`);
  }

  addRestaurant(
    name: string,
    type: string,
    location: string,
    img: string,
    description: string
  ) {
    const { dataUrl } = environment;
    return this.http.post<Restaurant>(`${dataUrl}/restaurants`, {
      name,
      type,
      location,
      img,
      description,
    });
  }
}
