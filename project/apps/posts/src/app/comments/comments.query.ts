import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsMongoId, IsUUID } from 'class-validator';
import { ICommentsFilters } from './comments.filters';
import { CommentsPropDesc } from './comments.const';

export class CommentsQuery implements ICommentsFilters {
  @ApiPropertyOptional({ description: CommentsPropDesc.Page })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  public page?: number;

  @ApiPropertyOptional({ description: CommentsPropDesc.Offset })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  public offset?: number;

  @ApiPropertyOptional({ description: CommentsPropDesc.Limit })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  public limit?: number;

  @ApiPropertyOptional({ description: CommentsPropDesc.PostId })
  @IsUUID()
  @IsOptional()
  public postId?: string;

  @ApiPropertyOptional({ description: CommentsPropDesc.AuthorId })
  @IsMongoId()
  @IsOptional()
  public authorId?: string;
}
