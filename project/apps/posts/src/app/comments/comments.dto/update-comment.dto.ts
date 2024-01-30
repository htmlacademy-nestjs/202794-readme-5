import { IsMongoId, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IPostComment } from '@project/libs/shared/types';
import { IsPostComment } from '@project/libs/shared/helpers';
import { CommentsPropDesc } from '../comments.const';

export class UpdateCommentDto implements Partial<IPostComment> {
  @ApiPropertyOptional({
    description: CommentsPropDesc.AuthorId,
    required: true,
  })
  @IsMongoId()
  @IsOptional()
  public authorId?: string;

  @ApiPropertyOptional({
    description: CommentsPropDesc.PostId,
    required: true,
  })
  @IsUUID()
  @IsOptional()
  public postId?: string;

  @ApiProperty({
    description: CommentsPropDesc.Message,
    example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    required: true,
  })
  @IsPostComment()
  public message: string;
}
