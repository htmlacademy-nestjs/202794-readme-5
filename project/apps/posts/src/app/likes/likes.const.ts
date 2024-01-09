export enum LikesPropDesc {
  LikeId = 'Like ID',
  CreatedAt = 'Date of creation',
  UpdatedAt = 'Date of updating',
  AuthorId = 'The ID of the author of the like',
  UserId = 'The ID of the author\'s user of the like',
  PostId = 'The ID of the post of the like',
}

export enum LikesApiDesc {
  Create = 'Create post\'s like',
  GetAll = 'Return list of post\'s likes',
  Remove = 'Delete post\'s likes',
}
