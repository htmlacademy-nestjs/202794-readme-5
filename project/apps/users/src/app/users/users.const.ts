export enum UsersErrorMessage {
  UserEmailAlreadyExists = 'User with email address already exists',
  UserIdNotFound = 'User with id not found',
  UserEmailNotFound = 'User with email not found',
}

export enum UsersPropDesc {
  Avatar = 'User avatar',
  CreatedAt = 'Date of creation',
  UpdatedAt = 'Date of updation',
  Email = 'Unique user email',
  Login = 'Unique user login',
  FirstName = 'User firstname',
  LastName = 'User lastname',
  Id = 'User ID',
  Password = 'User password',
  Token = 'User auth token',
}

export enum UsersApiDesc {
  Create = 'Create user',
  GetAll = 'Return list of users',
  GetOne = 'Return user by id',
  Remove = 'Delete user by id',
  Update = 'Update user data by id',
}
