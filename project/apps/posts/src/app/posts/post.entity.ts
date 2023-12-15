import type { IPost, PostStatus, PostType } from '@project/libs/shared/types'

export class Post implements IPost {
  public id?: string;
  public postType: PostType;
  public postStatus: PostStatus;
  public dateOfCreation: Date;
  public dateOfPublish?: Date;
  public authorId: string;
  public ownerId?: string;
  public ownerPostId?: string;
  public isRepost?: boolean;
}
