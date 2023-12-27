import { PostStatus } from './post-status.enum';
import { PostType } from './post-type.enum';
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
  /** Комментарии к посту */
  comments?: IPostComment[];
  /** Теги к посту */
  tags?: IPostTag[];
  /** Лайки к посту */
  likes?: IPostLike[];
  /** Заголовок публикации */
  title?: string;
  /** Тип публикации */
  postType: `${PostType}`;
  /** Состояние публикации */
  postStatus: `${PostStatus}`;
}

export interface IVideoPost extends IPost {
  postType: PostType.Video;
  /** Название публикации */
  video_title: string;
  /** Ссылка на видео */
  video_url: string;
}

export interface ITextPost extends IPost {
  postType: PostType.Text;
  /** Название публикации */
  text_title: string;
  /** Анонс публикации */
  text_preview: string;
  /** Текст публикации */
  text_content: string;
}

export interface IQuotePost extends IPost {
  postType: PostType.Quote;
  /** Текст цитаты */
  quote_content: string;
  /** Автор цитаты */
  quote_author: string;
}

export interface IPhotoPost extends IPost {
  postType: PostType.Photo;
  /** Фотография */
  photo_url: string;
}

export interface ILinkPost extends IPost {
  postType: PostType.Link;
  /** Ссылка */
  link_url: string;
  /** Описание */
  link_desc: string;
}
