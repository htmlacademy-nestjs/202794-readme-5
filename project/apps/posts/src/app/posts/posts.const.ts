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
  Title = 'Title of the post',
  PostType = 'Type of post',
  PostStatus = 'Current status of post',
}

export enum PostsApiDesc {
  Create = 'Create post',
  GetAll = 'Return list of posts',
  GetOne = 'Return post by id',
  Remove = 'Delete post by id',
  Update = 'Update post data by id',
}
