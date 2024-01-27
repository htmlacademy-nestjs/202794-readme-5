import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsMongoId, IsUUID } from 'class-validator';
import { ICommentsFilters } from './comments.filters';

export class CommentsQuery implements ICommentsFilters {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  public page?: number;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  public offset?: number;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  public limit?: number;

  @IsUUID()
  @IsOptional()
  public postId?: string;

  @IsMongoId()
  @IsOptional()
  public authorId?: string;
}
