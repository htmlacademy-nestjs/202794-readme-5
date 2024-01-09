import { Expose, Type, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPost, IPostTag, PostStatus, PostType } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';
import { PostsView } from '../posts.types';
import { PostCountRdo } from './post-count.rdo';
import { PostTagRdo } from './post-tag.rdo';

export class PostRdo implements IPost {
  @ApiProperty({ description: PostsPropDesc.PostId })
  @Expose()
  public id: string;

  @ApiProperty({ description: PostsPropDesc.CreatedAt })
  @Expose({ groups: [PostsView.Details] })
  public createdAt: Date;

  @ApiProperty({ description: PostsPropDesc.UpdatedAt })
  @Expose({ groups: [PostsView.Details] })
  public updatedAt: Date;

  @ApiProperty({ description: PostsPropDesc.PublishAt })
  @Expose()
  public publishAt: Date;

  @ApiProperty({ description: PostsPropDesc.AuthorId })
  @Expose()
  public authorId: string;

  @ApiProperty({ description: PostsPropDesc.OwnerId })
  @Expose({ groups: [PostsView.Details] })
  public ownerId?: string;

  @ApiProperty({ description: PostsPropDesc.OwnerPostId })
  @Expose({ groups: [PostsView.Details] })
  public ownerPostId?: string;

  @ApiProperty({ description: PostsPropDesc.Reposted })
  @Expose({ groups: [PostsView.Details] })
  public reposted: boolean;

  @ApiProperty({ description: PostsPropDesc.PostType })
  @Expose()
  public postType: `${PostType}`;

  @ApiProperty({ description: PostsPropDesc.PostStatus })
  @Expose()
  public postStatus: `${PostStatus}`;

  @ApiProperty({ description: PostsPropDesc.PostCount })
  @Expose()
  @Type(() => PostCountRdo)
  @Transform(({ obj }) => obj._count)
  public count: PostCountRdo;

  @ApiProperty({ description: PostsPropDesc.PostTags })
  @Expose()
  @Type(() => PostTagRdo)
  public tags?: IPostTag[];

  @Expose()
  public payload?: unknown;
}
