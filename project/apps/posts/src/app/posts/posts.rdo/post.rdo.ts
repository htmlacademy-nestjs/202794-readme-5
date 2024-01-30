import { Expose, Type, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPost, PostPayload, PostType, PostTypes, PostStatuses, PostStatus } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';
import { PAYLOAD_RDO_BY_POST_TYPE } from './post-payload';

export class PostRdo implements Partial<IPost> {
  @ApiProperty({ description: PostsPropDesc.PostId })
  @Expose()
  public id: string;

  @ApiProperty({ description: PostsPropDesc.PublishAt })
  @Expose()
  public publishAt: Date;

  @ApiProperty({ description: PostsPropDesc.AuthorId })
  @Expose()
  public authorId: string;

  @ApiProperty({
    enum: PostType,
    enumName: 'PostType',
    description: PostsPropDesc.PostType,
  })
  @Expose()
  public postType: PostTypes;

  @ApiProperty({
    enum: PostStatus,
    enumName: 'PostStatus',
    description: PostsPropDesc.PostStatus,
  })
  @Expose()
  public postStatus: PostStatuses;

  @ApiProperty({ description: PostsPropDesc.CommentsCount })
  @Expose()
  @Transform(({ obj }) => obj._count?.comments)
  public countComments: number;

  @ApiProperty({ description: PostsPropDesc.LikesCount })
  @Expose()
  @Transform(({ obj }) => obj._count?.likes)
  public countLikes: number;

  @ApiProperty({ description: PostsPropDesc.PostTags })
  @Expose()
  @Transform(({ obj }) => obj.tags?.map(tag => tag.text))
  public taggedBy?: string[];

  @ApiProperty({
    type: Object,
    description: PostsPropDesc.PostPayload,
  })
  @Expose()
  @Type(({ object }) => PAYLOAD_RDO_BY_POST_TYPE[object.postType] || null)
  public payload?: PostPayload;
}

export class PostDetailedRdo extends PostRdo {
  @ApiProperty({ description: PostsPropDesc.CreatedAt })
  @Expose()
  public createdAt: Date;

  @ApiProperty({ description: PostsPropDesc.UpdatedAt })
  @Expose()
  public updatedAt: Date;

  @ApiProperty({ description: PostsPropDesc.OwnerId })
  @Expose()
  public ownerId?: string;

  @ApiProperty({ description: PostsPropDesc.OwnerPostId })
  @Expose()
  public ownerPostId?: string;

  @ApiProperty({ description: PostsPropDesc.Reposted })
  @Expose()
  public reposted: boolean;
}
