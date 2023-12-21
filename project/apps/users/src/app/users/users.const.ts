export enum UsersErrorMessage {
  UserEmailAlreadyExists = 'User with email address already exists',
  UserIdNotFound = 'User with id not found',
}

export enum UsersPropDesc {
  Avatar = 'User avatar',
  CreatedAt = 'Date of creation',
  Email = 'Unique user email',
  FirstName = 'Username',
  Id = 'User ID',
  Password = 'User password',
}

export enum UsersApiDesc {
  Create = 'Create user',
  GetAll = 'Return list of users',
  GetOne = 'Return user by id',
  Remove = 'Delete user by id',
  Update = 'Update user data by id',
}
