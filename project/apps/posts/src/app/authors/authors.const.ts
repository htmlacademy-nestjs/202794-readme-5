export enum AuthorsErrorMessage {
  AuthorNotFound = 'Author not found',
}

export enum AuthorsPropDesc {
  AuthorId = 'Author ID',
  CreatedAt = 'Date of creation',
  AuthorCount = 'Author\'s properties counts',
  CommentsCount = 'Author\'s comments count',
  LikesCount = 'Author\'s likes count',
  PostsCount = 'Author\'s posts count',
  Offset = 'Skit the number of items',
  Limit = 'Limit the number of items',
  Count = 'Total items count',
  Page = 'Page number',
  Pages = 'Total number of pages',
}

export enum AuthorsApiDesc {
  GetAll = 'Return list of post\'s authors',
  GetOne = 'Return the author by id',
  Remove = 'Remove the author and related posts and comments',
}
