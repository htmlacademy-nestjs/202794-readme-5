export interface IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  firstname: string;
  lastname: string;
  avatar?: string;
}
