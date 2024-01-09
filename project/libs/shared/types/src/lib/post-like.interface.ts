/**
 * Лайк к посту
 */
export interface IPostLike {
  /** Дата создания */
  createdAt: Date;
  /** Дата изменения */
  updatedAt: Date;
  /** id автора лайка */
  authorId: string;
  /** id поста */
  postId: string;
}
