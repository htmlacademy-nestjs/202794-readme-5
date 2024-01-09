export const MAX_POSTS_LIMIT = 25;

export enum PostsErrorMessage {
  PostIdNotFound = 'Post with id not found',
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
  PostVideoUrl = 'Post\'s video url',
  PostTextPreview = 'Post\'s text preview',
  PostTextContent = 'Post\'s text content',
  PostQuoteContent = 'Post\'s quote content',
  PostQuoteAuthor = 'Post\'s quote author',
  PostPhotoUrl = 'Post\'s photo url',
  PostLinkUrl = 'Post\'s link url',
  PostLinkDesc = 'Post\'s link description',
  PostCount = 'Post\'s properties counts',
  CommentsCount = 'Post\'s comments count',
  LikesCount = 'Post\'s likes count',
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
}
