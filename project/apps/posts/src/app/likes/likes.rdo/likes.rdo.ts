import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPostLike } from '@project/libs/shared/types';
import { LikesPropDesc } from '../likes.const';

export class LikeRdo implements Partial<IPostLike> {
  @ApiProperty({ description: LikesPropDesc.AuthorId })
  @Expose()
  public authorId: string;

  @ApiProperty({ description: LikesPropDesc.PostId })
  @Expose()
  public postId: string;

  @ApiProperty({ description: LikesPropDesc.CreatedAt })
  @Expose()
  public createdAt: Date;

  @ApiProperty({ description: LikesPropDesc.UpdatedAt })
  @Expose()
  public updatedAt: Date;
}
