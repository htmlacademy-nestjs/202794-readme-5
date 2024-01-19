/**
 * Лайк к посту
 */
export interface IPostLike {
  /** id автора лайка */
  authorId: string;
  /** id поста */
  postId: string;
  /** Дата создания */
  createdAt: Date;
  /** Дата изменения */
  updatedAt: Date;
}
