export interface User {
  _id: string;
  email: string;
  username: string;
  password: string;
}

export interface UserForAuth {
  username: string;
  email: string;
  _id: string;
  accessToken: string;
}
