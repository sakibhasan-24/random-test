export interface IUser {
  _id?: string;
  name: string;
  email: string;
}
export interface IAuthResponse {
  user: IUser;
  token: string;
  message: string;
}
