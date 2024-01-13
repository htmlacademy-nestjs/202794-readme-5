import { PostStatuses } from './post-status.enum';
import { PostTypes } from './post-type.enum';
import { IPostComment } from './post-comment.interface';
import { IPostTag } from './post-tag.interface';
import { IPostLike } from './post-like.interface';

export interface IPost {
  id?: string;
  /** Дата создания публикации */
  createdAt: Date;
  /** Дата изменения публикации */
  updatedAt: Date;
  /** Дата публикации публикации */
  publishAt?: Date;
  /** id автора публикации */
  authorId: string;
  /** id автора публикации с которого сделали репост */
  ownerId?: string;
  /** id публикации с которого сделали репост */
  ownerPostId?: string;
  /** Публикация является репостом */
  reposted?: boolean;
  /** Комментарии к посту */
  comments?: IPostComment[];
  /** Теги к посту */
  tags?: IPostTag[];
  /** Лайки к посту */
  likes?: IPostLike[];
  /** Тип публикации */
  postType: PostTypes;
  /** Состояние публикации */
  postStatus: PostStatuses;
  /** Контент публикации */
  payload?: PostPayload;
}

export interface IVideoPayload {
  /** Название публикации */
  title: string;
  /** Ссылка на видео */
  url: string;
}

export interface ITextPayload {
  /** Название публикации */
  title: string;
  /** Анонс публикации */
  preview: string;
  /** Текст публикации */
  content: string;
}

export interface IQuotePayload {
  /** Текст цитаты */
  content: string;
  /** Автор цитаты */
  author: string;
}

export interface IPhotoPayload {
  /** Фотография */
  url: string;
}

export interface ILinkPayload {
  /** Ссылка */
  url: string;
  /** Описание */
  desc?: string;
}

export type PostPayload = unknown;
