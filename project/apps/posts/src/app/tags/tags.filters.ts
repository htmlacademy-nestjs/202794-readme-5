import { isNotEmptyObject, isString } from 'class-validator';
import { Prisma } from '@prisma/client';

export interface ITagsFilters {
  /** По имени тега */
  text?: string;
}

export function getTagsFilters(filters?: ITagsFilters) {
  let where: Prisma.TagWhereInput = {};

  if (isNotEmptyObject(filters)) {
    if (isString(filters.text)) {
      where = { text: filters.text };
    }
  }
  return { where };
}
