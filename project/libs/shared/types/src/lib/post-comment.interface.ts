/**
 * Комментарий к посту
 */
export interface IPostComment {
  id?: string;
  /** id поста комментария */
  postId: string;
  /** id автора комментария */
  ownerId: string;
  /** Дата создания комментария */
  dateOfCreation: Date;
  /** Текст комментария */
  text: string;
}
