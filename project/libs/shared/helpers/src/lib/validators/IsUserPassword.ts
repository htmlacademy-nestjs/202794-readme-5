import { applyDecorators } from "@nestjs/common";
import { MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export const MAX_PASSWORD_LENGTH = 12;
export const MIN_PASSWORD_LENGTH = 6;

export function IsUserPassword() {
  return applyDecorators(
    MaxLength(MAX_PASSWORD_LENGTH),
    MinLength(MIN_PASSWORD_LENGTH),
    IsNotEmpty(),
  );
}
