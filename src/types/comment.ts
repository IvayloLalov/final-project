import { Restaurant } from './restaurant';
import { User } from './user';

export interface Comment {
  text: string;
  _id: string;
  userId: User;
  username: User;
  restaurantId: Restaurant;
}
