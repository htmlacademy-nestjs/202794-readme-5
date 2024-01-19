import { MaxLength, MinLength, IsNotEmpty, IsString } from 'class-validator';
import { applyDecorators } from '@nestjs/common';

export const MAX_COMMENT_LENGTH = 300;
export const MIN_COMMENT_LENGTH = 10;

export function IsPostComment() {
  return applyDecorators(
    MaxLength(MAX_COMMENT_LENGTH),
    MinLength(MIN_COMMENT_LENGTH),
    IsString(),
    IsNotEmpty(),
  );
}
