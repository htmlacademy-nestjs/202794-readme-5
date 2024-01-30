export enum CommentsErrorMessage {
  CommentNotFound = 'Comment with id not found',
  PostNotFound = 'Post not found',
}

export enum CommentsPropDesc {
  CommentId = 'Comment ID',
  CreatedAt = 'Date of creation',
  UpdatedAt = 'Date of updating',
  AuthorId = 'The ID of the author of the comment',
  PostId = 'The ID of the post of the comment',
  Message = 'The message of the comment',
  Offset = 'Skit the number of items',
  Limit = 'Limit the number of items',
  Count = 'Total items count',
  Page = 'Page number',
  Pages = 'Total number of pages',
}

export enum CommentsApiDesc {
  Create = 'Create post\'s comment',
  GetAll = 'Return list of post\'s comments',
  GetOne = 'Return post\'s comment by id',
  Update = 'Update post\'s comment',
  Remove = 'Delete post\'s comment',
}
