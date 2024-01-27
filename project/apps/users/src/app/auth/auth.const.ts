export enum AuthErrorMessage {
  UserIsUnauthorized = 'The email address or password is incorrect',
  PasswordIsNotMatch = 'The password is not correct',
  AuthUserNotFound = 'The authorized user is not found',
  ForUnAuthUsers = 'Available only to unauthorized users',
}

export enum AuthPropDesc {
  Id = 'User ID',
  Email = 'Unique user email',
  Password = 'User password',
  PasswordNew = 'User new password',
  AccessToken = 'User access token',
  RefreshToken = 'User refresh token',
}

export enum AuthApiDesc {
  Create = 'Create user',
  Login = 'Login user',
  Unauthorized = 'User is unauthorized',
  ById = 'Return auth user by id',
  RefreshToken = 'Return a new access/refresh tokens',
}

export const USERNAME_FIELD_NAME = 'email';
