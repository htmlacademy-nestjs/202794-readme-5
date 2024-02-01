export enum PostsErrorMessage {
  PostNotFound = 'Post with id not found',
}

export enum PostsPropDesc {
  PostId = 'Post ID',
  CreatedAt = 'Date of creation',
  UpdatedAt = 'Date of updation',
  PublishAt = 'Date of publication',
  AuthorId = 'Post\'s author id',
  OwnerId = 'Post\'s owner id',
  OwnerPostId = 'Original post ID if it is repost',
  Reposted = 'Post was reposted',
  PostType = 'Type of post',
  PostTitle = 'Title of post',
  PostStatus = 'Current status of post',
  PostTags = 'Post\'s tags',
  PostTagId = 'Post\'s tag id',
  PostTagText = 'Post\'s tag text',
  PostPayload = 'Post\'s payload',
  PostVideoUrl = 'Post\'s video url',
  PostTextPreview = 'Post\'s text preview',
  PostTextContent = 'Post\'s text content',
  PostQuoteContent = 'Post\'s quote content',
  PostQuoteAuthor = 'Post\'s quote author',
  PostPhotoUrl = 'Post\'s photo url',
  PostLinkUrl = 'Post\'s link url',
  PostLinkDesc = 'Post\'s link description',
  CommentsCount = 'Post\'s comments count',
  LikesCount = 'Post\'s likes count',
  Order = 'Posts order',
  Offset = 'Skit the number of posts',
  Limit = 'Limit the number of posts',
  Count = 'Total items count',
  Page = 'Page number',
  Pages = 'Total number of pages',
  Since = 'Posts publish date filter',
}

export enum PostsApiDesc {
  CreatePost = 'Create post',
  CreateVideoPost = 'Create video post',
  CreateTextPost = 'Create text post',
  CreateQuotePost = 'Create quote post',
  CreatePhotoPost = 'Create photo post',
  CreateLinkPost = 'Create link post',
  GetAll = 'Return list of posts',
  GetOne = 'Return post by id',
  Remove = 'Delete post by id',
  Update = 'Update post data by id',
  Repost = 'Repost post',
  Publish = 'Publish last update',
}

export const VIDEO_TITLE_MAX_LENGTH = 50;
export const VIDEO_TITLE_MIN_LENGTH = 20;

export const TEXT_TITLE_MAX_LENGTH = 50;
export const TEXT_TITLE_MIN_LENGTH = 20;
export const TEXT_PREVIEW_MAX_LENGTH = 255;
export const TEXT_PREVIEW_MIN_LENGTH = 50;
export const TEXT_CONTENT_MAX_LENGTH = 1024;
export const TEXT_CONTENT_MIN_LENGTH = 100;

export const QUOTE_CONTENT_MAX_LENGTH = 300;
export const QUOTE_CONTENT_MIN_LENGTH = 20;
export const QUOTE_AUTHOR_MAX_LENGTH = 50;
export const QUOTE_AUTHOR_MIN_LENGTH = 3;

export const LINK_DESC_MAX_LENGTH = 300;
