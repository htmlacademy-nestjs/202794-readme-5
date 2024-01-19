import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPostComment } from '@project/libs/shared/types';
import { CommentsPropDesc } from '../comments.const';

export class CommentRdo implements Partial<IPostComment> {
  @ApiProperty({ description: CommentsPropDesc.CommentId })
  @Expose()
  public id: string;

  @ApiProperty({ description: CommentsPropDesc.CreatedAt })
  @Expose()
  public createdAt: Date;

  @ApiProperty({ description: CommentsPropDesc.UpdatedAt })
  @Expose()
  public updatedAt: Date;

  @ApiProperty({ description: CommentsPropDesc.AuthorId })
  @Expose()
  public authorId: string;

  @ApiProperty({ description: CommentsPropDesc.PostId })
  @Expose()
  public postId: string;

  @ApiProperty({ description: CommentsPropDesc.Message })
  @Expose()
  public message: string;
}
