export interface User {
  restaurants: string[];
  comments: string[];
  id: string;
  email: string;
  username: string;
  password: string;
}

export interface UserForAuth {
  username: string;
  email: string;
  password: string;
  id: string;
}
