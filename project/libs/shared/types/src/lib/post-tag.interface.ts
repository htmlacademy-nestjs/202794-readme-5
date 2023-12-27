/**
 * Тэги к посту
 */
export interface IPostTag {
  id?: string;
  /** Дата создания тэга */
  createdAt: Date;
  /** Дата изменения тэга */
  updatedAt: Date;
  /** Текст тэга */
  text: string;
}
