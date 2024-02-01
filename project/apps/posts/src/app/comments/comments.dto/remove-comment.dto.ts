import { IsMongoId, IsOptional, IsUUID } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IPostComment } from '@project/libs/shared/types';
import { CommentsPropDesc } from '../comments.const';

export class RemoveCommentDto implements Partial<IPostComment> {
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
}
