import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IPost, PostStatus, PostType } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';

export class PostRdo implements IPost {
  @ApiProperty({ description: PostsPropDesc.PostId })
  @Expose()
  public id: string;

  @ApiProperty({ description: PostsPropDesc.CreatedAt })
  @Expose()
  public createdAt: Date;

  @ApiProperty({ description: PostsPropDesc.UpdatedAt })
  @Expose()
  public updatedAt: Date;

  @ApiProperty({ description: PostsPropDesc.PublishAt })
  @Expose()
  public publishAt: Date;

  @ApiProperty({ description: PostsPropDesc.AuthorId })
  @Expose()
  public authorId: string;

  @ApiProperty({ description: PostsPropDesc.OwnerId })
  @Expose()
  public ownerId?: string;

  @ApiProperty({ description: PostsPropDesc.OwnerPostId })
  @Expose()
  public ownerPostId?: string;

  @ApiProperty({ description: PostsPropDesc.Title })
  @Expose()
  public title?: string;

  @ApiProperty({ description: PostsPropDesc.PostType })
  @Expose()
  public postType: `${PostType}`;

  @ApiProperty({ description: PostsPropDesc.PostStatus })
  @Expose()
  public postStatus: `${PostStatus}`;
}
