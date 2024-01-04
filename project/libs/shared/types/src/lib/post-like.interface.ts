/**
 * Like к посту
 */
export interface IPostLike {
  id?: string;
  /** Дата создания */
  createdAt: Date;
  /** Дата изменения */
  updatedAt: Date;
  /** Автор лайка */
  ownerId: string;
  /** id поста */
  postId: string;
}
