import { PostStatus } from './post-status.enum';
import { PostType } from './post-type.enum';
import { IPostComment } from './post-comment.interface';
import { IPostTag } from './post-tag.interface';
import { IPostLike } from './post-like.interface';

export interface IPost<C extends {} = {}> {
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
  postType: `${PostType}`;
  /** Состояние публикации */
  postStatus: `${PostStatus}`;
  /** Контент публикации */
  payload?: C;
}

export interface IVideoPayload {
  /** Тип */
  type: PostType.Video;
  /** Название публикации */
  title: string;
  /** Ссылка на видео */
  url: string;
}

export interface IVideoPost extends IPost<IVideoPayload> {
  postType: PostType.Video;
}

export interface ITextPayload {
  /** Тип */
  type: PostType.Text;
  /** Название публикации */
  title: string;
  /** Анонс публикации */
  preview: string;
  /** Текст публикации */
  content: string;
}

export interface ITextPost extends IPost<ITextPayload> {
  postType: PostType.Text;
}

export interface IQuotePayload {
  /** Тип */
  type: PostType.Quote;
  /** Текст цитаты */
  content: string;
  /** Автор цитаты */
  author: string;
}

export interface IQuotePost extends IPost<IQuotePayload> {
  postType: PostType.Quote;
}

export interface IPhotoPayload {
  /** Тип */
  type: PostType.Photo;
  /** Фотография */
  url: string;
}

export interface IPhotoPost extends IPost<IPhotoPayload> {
  postType: PostType.Photo;
}

export interface ILinkPayload {
  /** Тип */
  type: PostType.Link;
  /** Ссылка */
  url: string;
  /** Описание */
  desc: string;
}

export interface ILinkPost extends IPost<ILinkPayload> {
  postType: PostType.Link;
}
