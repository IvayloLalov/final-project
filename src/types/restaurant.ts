export interface Restaurant {
  name: string;
  type: string;
  location: string;
  img: string;
  description: string;
  _id: string;
  _createdOn: string;
  _ownerId: string;
}

export interface RestaurantForUpdate {
  name: string;
  type: string;
  location: string;
  img: string;
  description: string;
}
