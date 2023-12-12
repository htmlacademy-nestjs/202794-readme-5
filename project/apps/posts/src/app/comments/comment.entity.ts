import type { IPostComment } from '@project/libs/shared/types'

export class Comment implements IPostComment {
  public id?: string;
  public postId: string;
  public ownerId: string;
  public dateOfCreation: Date;
  public text: string;
}
