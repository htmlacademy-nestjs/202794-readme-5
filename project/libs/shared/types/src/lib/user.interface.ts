export interface IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  login: string;
  firstname?: string;
  lastname?: string;
  avatar?: string;
}
