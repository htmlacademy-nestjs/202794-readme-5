import { isNotEmptyObject, isUUID, isMongoId } from 'class-validator';
import { Prisma } from '@prisma/client';

export interface ICommentsFilters {
  /** Начиная с какой страницы возвращать комментарий */
  page?: number;
  /** Начиная с какого элемента возвращать комментарий (если не задан `page`) */
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
  const where: Prisma.CommentWhereInput = {};
  const orderBy: Prisma.CommentOrderByWithRelationInput = { createdAt: 'desc' };

  if (isNotEmptyObject(filters)) {
    if (filters.limit > 0) {
      take = Math.min(filters.limit, MAX_COMMENTS_LIMIT);
    }
    if (filters.offset > 0) {
      skip = filters.offset;
    }
    if (filters.page > 0) {
      skip = (filters.page - 1) * take;
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
