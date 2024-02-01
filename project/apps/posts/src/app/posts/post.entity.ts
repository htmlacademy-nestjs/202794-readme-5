import type { IPost, IPostComment, PostPayload, PostTypes, PostStatuses } from '@project/libs/shared/types'
import { IPostLike } from '@project/libs/shared/types';
import { IPostTag } from '@project/libs/shared/types';

export class Post implements IPost {
  public id?: string;
  public createdAt: Date;
  public updatedAt: Date;
  public publishAt?: Date;
  public authorId: string;
  public ownerId?: string;
  public ownerPostId?: string;
  public comments?: IPostComment[];
  public tags?: IPostTag[];
  public likes?: IPostLike[];
  public postType: PostTypes;
  public postStatus: PostStatuses;
  public payload: PostPayload;
}
