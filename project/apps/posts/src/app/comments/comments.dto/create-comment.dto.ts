import { IsOptional, IsString, IsUUID, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IPostComment } from '@project/libs/shared/types';
import { CommentsPropDesc } from '../comments.const';

export class CreateCommentDto implements Partial<IPostComment> {
  @ApiProperty({ description: CommentsPropDesc.AuthorId })
  @IsUUID()
  @IsOptional()
  public authorId: string;

  @ApiProperty({
    description: CommentsPropDesc.PostId,
    required: true,
  })
  @IsUUID()
  public postId: string;

  @ApiProperty({
    description: CommentsPropDesc.Message,
    example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    required: true,
  })
  @IsString()
  public message: string;
}
