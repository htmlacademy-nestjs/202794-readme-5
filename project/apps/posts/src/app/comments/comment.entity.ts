import type { IPostComment } from '@project/libs/shared/types'

export class Comment implements IPostComment {
  public id?: string;
  public createdAt: Date;
  public updatedAt: Date;
  public authorId: string;
  public postId: string;
  public message: string;
}
