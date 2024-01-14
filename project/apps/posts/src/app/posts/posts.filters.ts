import { Prisma } from '@prisma/client';
import { isMongoId, isNotEmptyObject } from 'class-validator';
import { PostStatus, PostType, PostsOrder, isPostStatus, isPostType, isPostsOrder } from '@project/libs/shared/types';

export interface IPostsFilters {
  /** Начиная с какой страницы возвращать публикации */
  page?: number;
  /** Начиная с какого элемента возвращать публикации (если не задан `page`) */
  offset?: number;
  /** Количество возвращаемых публикаций */
  limit?: number;
  /** Фильтр по автору публикаций */
  authorId?: string;
  /** Фильтр по типу публикаций */
  type?: PostType;
  /** Фильтр по тегам публикаций */
  tags?: string[];
  /** Фильтр по статусу публикаций */
  status?: PostStatus;
  /** Порядок в котором возвращаются публикации */
  order?: PostsOrder;
}

export enum PostsGroups {
  Detailed = 'DETAILED',
}

export const MAX_POSTS_LIMIT = 25;

export function getPostsFilters(filters?: IPostsFilters) {
  let take = MAX_POSTS_LIMIT;
  let skip = 0;
  let where: Prisma.PostWhereInput = { postStatus: PostStatus.Published };
  let orderBy: Prisma.PostOrderByWithRelationInput = { publishAt: 'desc' };

  if (isNotEmptyObject(filters)) {
    if (filters.limit > 0) {
      take = Math.min(filters.limit, MAX_POSTS_LIMIT);
    }
    if (filters.offset > 0) {
      skip = filters.offset;
    }
    if (isMongoId(filters.authorId)) {
      where.authorId = filters.authorId;
    }
    if (isPostType(filters.type)) {
      where.postType = filters.type;
    }
    if (isPostStatus(filters.status)) {
      where.postStatus = filters.status;
    }
    if (Array.isArray(filters.tags)) {
      where.tags = { some: { text: { in: filters.tags } } };
    }
    if (isPostsOrder(filters.order)) {
      switch (filters.order) {
        case PostsOrder.PublishAt: orderBy = { publishAt: 'desc' }; break;
        case PostsOrder.Likes: orderBy = { likes: { _count: 'desc' } }; break;
        case PostsOrder.Comments: orderBy = { comments: { _count: 'desc' } }; break;
      }
    }
  }
  return { take, skip, where, orderBy };
}
