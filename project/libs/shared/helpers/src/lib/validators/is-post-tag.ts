import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { applyDecorators } from '@nestjs/common';

export const MAX_TAG_LENGTH = 10;
export const MIN_TAG_LENGTH = 3;

export function IsPostTag(each = false) {
  return applyDecorators(
    Matches(/^[^0-9].*$/i, { each, message: 'Post tag shoud start with a letter' }),
    Matches(/^[^\s\\\/?*|<>:"']+$/i, { each, message: 'Post tag should not contains spaces and \\?*|<>:"\' chars' }),
    MaxLength(MAX_TAG_LENGTH, { each }),
    MinLength(MIN_TAG_LENGTH, { each }),
    IsString({ each }),
    IsNotEmpty({ each }),
  );
}
