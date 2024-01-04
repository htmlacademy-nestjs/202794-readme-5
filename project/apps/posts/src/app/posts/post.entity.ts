import type { IPost, IPostComment, PostStatus, PostType } from '@project/libs/shared/types'
import { IPostLike } from 'libs/shared/types/src/lib/post-like.interface';
import { IPostTag } from 'libs/shared/types/src/lib/post-tag.interface';

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
  public title?: string;
  public postType: `${PostType}`;
  public postStatus: `${PostStatus}`;
}
