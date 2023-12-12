import { PostStatus } from "./post-status.enum";
import { PostType } from "./post-type.enum";

export interface IPost {
  id?: string;
  /** Тип поста */
  postType: PostType;
  /** Состояние поста */
  postStatus: PostStatus;
  /** Дата создания поста */
  dateOfCreation: Date;
  /** Дата публикации поста */
  dateOfPublish?: Date;
  /** id автора поста */
  authorId: string;
  /** id автора поста с которого сделали репост */
  ownerId?: string;
  /** id поста с которого сделали репост */
  ownerPostId?: string;
  /** Пост является репостом */
  isRepost?: boolean;
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
