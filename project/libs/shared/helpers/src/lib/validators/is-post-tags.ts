import { Transform } from 'class-transformer';
import { ArrayMaxSize, IsArray } from 'class-validator';
import { applyDecorators } from '@nestjs/common';
import { IsPostTag } from './is-post-tag';

export const MAX_POST_TAGS = 8;

function toUniqueTags({ value }: { value: unknown[] }) {
  if (Array.isArray(value)) {
    return Array.from(new Set(value.map(it => `${it}`.toLowerCase())));
  }
  return value;
}

export function IsPostTags() {
  return applyDecorators(
    IsPostTag(true),
    ArrayMaxSize(MAX_POST_TAGS),
    Transform(toUniqueTags),
    IsArray(),
  );
}
