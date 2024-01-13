import { IsEmail, IsNotEmpty } from 'class-validator';
import { applyDecorators } from '@nestjs/common';

export const EMAIL_IS_INVALID_MESSAGE = 'The email is not valid';

export function IsUserEmail() {
  return applyDecorators(
    IsEmail({}, { message: EMAIL_IS_INVALID_MESSAGE }),
    IsNotEmpty()
  );
}
