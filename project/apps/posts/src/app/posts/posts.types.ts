import { PostStatus, PostType } from "@project/libs/shared/types";

export interface IPostsFilter {
  /** Начиная с какого элемента возвращать публикации */
  offset?: number;
  /** Количество возвращаемых публикаций */
  limit?: number;
  /** Фильтр по автору публикаций */
  byUserId?: string;
  /** Фильтр по типу публикаций */
  byType?: PostType;
  /** Фильтр по тегам публикаций */
  byTag?: string[];
  /** Фильтр по статусу публикаций */
  byStatus?: PostStatus;
  /** Порядок в котором возвращаются публикации */
  orderBy?: PostsOrder;
}

export enum PostsOrder {
  /** По дате публикации (по убыванию) */
  PublishAt = 'PUBLISH_AT',
  /** По количестку лайков (по убыванию) */
  Likes = 'LIKES',
  /** По количестку комментариев (по убыванию) */
  Comments = 'COMMENTS',
}

export enum PostsView {
  Details = 'DETAILS',
}
