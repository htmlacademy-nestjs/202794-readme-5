import { isUUID, isMongoId } from 'class-validator';
import { Prisma } from '@prisma/client';

export interface ICommentsFilters {
  /** Начиная с какого элемента возвращать комментарий */
  offset?: number;
  /** Количество возвращаемых комментариев */
  limit?: number;
  /** Фильтр по публикации */
  postId?: string;
  /** Фильтр по автору комментария */
  authorId?: string;
}

export const MAX_COMMENTS_LIMIT = 50;

export function getCommentsFilters(filters?: ICommentsFilters) {
  let take = MAX_COMMENTS_LIMIT;
  let skip = 0;
  let where: Prisma.CommentWhereInput = {};
  let orderBy: Prisma.CommentOrderByWithRelationInput = { createdAt: 'desc' };

  if (typeof filters === 'object') {
    if (filters.limit > 0) {
      take = filters.limit;
    }
    if (filters.offset > 0) {
      skip = filters.offset;
    }
    if (isUUID(filters.postId)) {
      where.postId = filters.postId;
    }
    if (isMongoId(filters.authorId)) {
      where.authorId = filters.authorId;
    }
  }
  return { take, skip, where, orderBy };
}
