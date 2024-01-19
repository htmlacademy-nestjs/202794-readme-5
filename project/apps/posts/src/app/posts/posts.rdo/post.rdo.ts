import { Expose, Type, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPost, PostPayload, PostTypes, PostStatuses } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';
import { PostsGroups } from '../posts.filters';
import { PAYLOAD_RDO_BY_POST_TYPE } from './post-payload';

export class PostRdo implements IPost {
  @ApiProperty({ description: PostsPropDesc.PostId })
  @Expose()
  public id: string;

  @ApiProperty({ description: PostsPropDesc.CreatedAt })
  @Expose({ groups: [PostsGroups.Detailed] })
  public createdAt: Date;

  @ApiProperty({ description: PostsPropDesc.UpdatedAt })
  @Expose({ groups: [PostsGroups.Detailed] })
  public updatedAt: Date;

  @ApiProperty({ description: PostsPropDesc.PublishAt })
  @Expose()
  public publishAt: Date;

  @ApiProperty({ description: PostsPropDesc.AuthorId })
  @Expose()
  public authorId: string;

  @ApiProperty({ description: PostsPropDesc.OwnerId })
  @Expose({ groups: [PostsGroups.Detailed] })
  public ownerId?: string;

  @ApiProperty({ description: PostsPropDesc.OwnerPostId })
  @Expose({ groups: [PostsGroups.Detailed] })
  public ownerPostId?: string;

  @ApiProperty({ description: PostsPropDesc.Reposted })
  @Expose({ groups: [PostsGroups.Detailed] })
  public reposted: boolean;

  @ApiProperty({ description: PostsPropDesc.PostType })
  @Expose()
  public postType: PostTypes;

  @ApiProperty({ description: PostsPropDesc.PostStatus })
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

  @ApiProperty({ description: PostsPropDesc.PostPayload })
  @Expose()
  @Type(({ object }) => PAYLOAD_RDO_BY_POST_TYPE[object.postType] || null)
  public payload?: PostPayload;
}
