export enum LikesErrorMessage {
  LikeNotFound = 'Like not found',
  PostNotFound = 'Post not found or not published yet',
}

export enum LikesPropDesc {
  CreatedAt = 'Date of creation',
  UpdatedAt = 'Date of updating',
  AuthorId = 'The ID of the author of the like',
  PostId = 'The ID of the post of the like',
  Offset = 'Skit the number of items',
  Limit = 'Limit the number of items',
  Count = 'Total items count',
  Page = 'Page number',
  Pages = 'Total number of pages',
}

export enum LikesApiDesc {
  GetAll = 'Return list of post\'s likes',
  Create = 'Create post\'s like',
  Remove = 'Delete post\'s likes',
}
