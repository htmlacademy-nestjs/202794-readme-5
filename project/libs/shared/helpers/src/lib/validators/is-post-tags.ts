import { ArrayMaxSize, IsArray } from 'class-validator';
import { applyDecorators } from '@nestjs/common';
import { IsPostTag } from './is-post-tag';

export const MAX_POST_TAGS = 8;

export function IsPostTags() {
  return applyDecorators(
    IsPostTag(true),
    ArrayMaxSize(MAX_POST_TAGS),
    IsArray(),
  );
}
