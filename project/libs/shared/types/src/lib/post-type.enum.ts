/**
 * Тип поста
 */
export enum PostType {
  /** Видео */
  Video = 'VIDEO',
  /** Текст */
  Text = 'TEXT',
  /** Цитата */
  Quote = 'QUOTE',
  /** Фото */
  Photo = 'PHOTO',
  /** Ссылка */
  Link = 'LINK',
}

export type PostTypes = `${PostType}`;

export const POST_TYPE_VALUES = Object.values<string>(PostType);

export function isPostType(value: string): value is PostTypes {
  return POST_TYPE_VALUES.includes(value);
}
