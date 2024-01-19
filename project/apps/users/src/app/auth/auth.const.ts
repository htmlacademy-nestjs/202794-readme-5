export enum AuthErrorMessage {
  UserIsUnauthorized = 'The email address or password is incorrect',
  PasswordIsNotMatch = 'The password is not incorrect',
}

export enum AuthPropDesc {
  Id = 'User ID',
  Email = 'Unique user email',
  Password = 'User password',
  PasswordNew = 'User new password',
  Token = 'User auth token',
}

export enum AuthApiDesc {
  Create = 'Create user',
  Login = 'Login user',
  Unauthorized = 'User is unauthorized',
  ById = 'Return auth user by id',
}
