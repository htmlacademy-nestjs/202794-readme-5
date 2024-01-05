import { applyDecorators } from "@nestjs/common";
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export const MAX_NAME_LENGTH = 50;
export const MIN_NAME_LENGTH = 3;

export function IsUserName() {
  return applyDecorators(
    MaxLength(MAX_NAME_LENGTH),
    MinLength(MIN_NAME_LENGTH),
    IsNotEmpty(),
    IsString(),
  );
}
