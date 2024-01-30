import { Transform, Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsMongoId, IsIn, IsArray, IsString, IsDate } from 'class-validator';
import { POSTS_ORDER_VALUES, POST_STATUS_VALUES, POST_TYPE_VALUES, PostStatus, PostType, PostsOrder } from '@project/libs/shared/types';
import { IsPostTag } from '@project/libs/shared/helpers';
import { IPostsFilters } from './posts.filters';
import { PostsPropDesc } from './posts.const';

export class PostsQuery implements IPostsFilters {
  @ApiPropertyOptional({ description: PostsPropDesc.Page })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  public page?: number;

  @ApiPropertyOptional({ description: PostsPropDesc.Offset })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  public offset?: number;

  @ApiPropertyOptional({ description: PostsPropDesc.Limit })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  public limit?: number;

  @ApiPropertyOptional({ description: PostsPropDesc.AuthorId })
  @IsMongoId()
  @IsOptional()
  public authorId?: string;

  @ApiPropertyOptional({
    enum: PostType,
    enumName: 'PostType',
    description: PostsPropDesc.PostType,
  })
  @IsIn(POST_TYPE_VALUES)
  @Transform(({ value }) => `${value}`.toUpperCase())
  @IsOptional()
  public type?: PostType;

  @ApiPropertyOptional({
    enum: PostStatus,
    enumName: 'PostStatus',
    description: PostsPropDesc.PostStatus,
  })
  @IsIn(POST_STATUS_VALUES)
  @Transform(({ value }) => `${value}`.toUpperCase())
  @IsOptional()
  public status?: PostStatus;

  @ApiPropertyOptional({
    type: [String],
    description: PostsPropDesc.PostTags,
  })
  @IsPostTag(true)
  @IsArray()
  @Transform(({ value }) => `${value}`.split(','))
  @IsOptional()
  public tags?: string[];

  @ApiPropertyOptional({
    enum: PostsOrder,
    enumName: 'PostsOrder',
    description: PostsPropDesc.Order,
  })
  @IsIn(POSTS_ORDER_VALUES)
  @Transform(({ value }) => `${value}`.toUpperCase())
  @IsOptional()
  public order?: PostsOrder;

  @ApiPropertyOptional({ description: PostsPropDesc.PostTitle })
  @IsString()
  @IsOptional()
  public title?: string;

  @ApiPropertyOptional({ description: PostsPropDesc.Since })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  public since?: Date;
}
