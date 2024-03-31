import { Comment } from './comment';

export interface Restaurant {
  name: string;
  type: string;
  location: string;
  img: string;
  description: string;
  comments: Comment[];
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
