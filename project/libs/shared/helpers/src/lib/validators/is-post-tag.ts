import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { applyDecorators } from '@nestjs/common';

export const MAX_TAG_LENGTH = 10;
export const MIN_TAG_LENGTH = 3;
export const TAG_REGEXP = new RegExp(String.raw`^[^\s\\\/?*|<>:"']{${MIN_TAG_LENGTH},${MAX_TAG_LENGTH}}$`, 'i');
export const TAG_MESSAGE =
  `Post tag should not contains spaces and \\?*|<>:"\' chars and tag\'s length must be greater than ${MIN_TAG_LENGTH} and less than ${MAX_TAG_LENGTH} chars`;

export function IsPostTag(each = false) {
  return applyDecorators(
    Matches(TAG_REGEXP, { each, message: TAG_MESSAGE }),
    IsString({ each }),
    IsNotEmpty({ each }),
  );
}
