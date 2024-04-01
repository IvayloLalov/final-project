import { Restaurant } from './restaurant';
import { User } from './user';

export interface Comment {
  text: string;
  userId: User;
  username: User;
  restaurantId: Restaurant;
  _id: string;
}
