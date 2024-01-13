import { IPostLike } from '@project/libs/shared/types';

export type LikeId = {
  authorId: string;
  postId: string;
};

export class Like implements IPostLike {
  public id?: LikeId;
  public createdAt: Date;
  public updatedAt: Date;
  public authorId: string;
  public postId: string;
}
