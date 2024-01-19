/**
 * Комментарий к посту
 */
export interface IPostComment {
  id?: string;
  /** Дата создания комментария */
  createdAt: Date;
  /** Дата изменения комментария */
  updatedAt: Date;
  /** id автора комментария */
  authorId: string;
  /** id поста комментария */
  postId: string;
  /** Текст комментария */
  message: string;
}
