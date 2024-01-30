export enum UsersErrorMessage {
  UserEmailAlreadyExists = 'User with email address already exists',
  UserNotFound = 'User with id not found',
  UserEmailNotFound = 'User with email not found',
}

export enum UsersPropDesc {
  Avatar = 'User avatar',
  CreatedAt = 'Date of creation',
  Email = 'Unique user email',
  FirstName = 'User firstname',
  LastName = 'User lastname',
  Id = 'User ID',
  Password = 'User password',
  Offset = 'Skit the number of items',
  Limit = 'Limit the number of items',
  Count = 'Total items count',
  Page = 'Page number',
  Pages = 'Total number of pages',
}

export enum UsersApiDesc {
  GetAll = 'Return list of users',
  GetOne = 'Return user by id',
  Create = 'Create user',
  Update = 'Update user data by id',
  Remove = 'Delete user by id',
  RemoveAll = 'Delete all users',
}
