/**
 * Статус поста
 */
export enum PostStatus {
  /** Опубликован */
  Published = 'PUBLISHED',
  /** Черновик */
  Draft = 'DRAFT',
}

export type PostStatuses = `${PostStatus}`;

export const POST_STATUS_VALUES = Object.values<string>(PostStatus);

export function isPostStatus(value: string): value is PostStatus {
  return POST_STATUS_VALUES.includes(value);
}
