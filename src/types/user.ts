export interface User {
  restaurants: string[];
  comments: string[];
  _id: string;
  email: string;
  username: string;
  password: string;
}

export interface UserForAuth {
  username: string;
  email: string;
  //   password: string;
  _id: string;
  accessToken: string;
}
