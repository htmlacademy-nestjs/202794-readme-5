import { Prisma } from '@prisma/client';
import { isUUID, isMongoId, isNotEmptyObject } from 'class-validator';

export interface ILikesFilters {
  /** По id автора лайка */
  authorId?: string;
  /** По id публикации */
  postId?: string;
}

export function getLikesFilters(filters?: ILikesFilters) {
  let where: Prisma.LikeWhereInput = {};

  if (isNotEmptyObject(filters)) {
    if (isMongoId(filters.authorId)) {
      where.authorId = filters.authorId;
    }
    if (isUUID(filters.postId)) {
      where.postId = filters.postId;
    }
  }
  return { where };
}
