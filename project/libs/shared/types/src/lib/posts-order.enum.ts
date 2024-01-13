/**
 * Порядок сортировки публикаций
 */
export enum PostsOrder {
  /** По дате публикации (по убыванию) */
  PublishAt = 'PUBLISH_AT',
  /** По количестку лайков (по убыванию) */
  Likes = 'LIKES',
  /** По количестку комментариев (по убыванию) */
  Comments = 'COMMENTS',
}

export type PostsOrders = `${PostsOrder}`;

export const POSTS_ORDER_VALUES = Object.values<string>(PostsOrder);

export function isPostsOrder(value: string): value is PostsOrder {
  return POSTS_ORDER_VALUES.includes(value);
}
