import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsMongoId, IsIn, IsArray, IsString } from 'class-validator';
import { IsPostTag } from '@project/libs/shared/helpers';
import { IPostsFilters } from './posts.filters';
import { POSTS_ORDER_VALUES, POST_STATUS_VALUES, POST_TYPE_VALUES, PostStatus, PostType, PostsOrder } from '@project/libs/shared/types';

export class PostsQuery implements IPostsFilters {
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

  @IsMongoId()
  @IsOptional()
  public authorId?: string;

  @IsIn(POST_TYPE_VALUES)
  @Transform(({ value }) => `${value}`.toUpperCase())
  @IsOptional()
  public type?: PostType;

  @IsIn(POST_STATUS_VALUES)
  @Transform(({ value }) => `${value}`.toUpperCase())
  @IsOptional()
  public status?: PostStatus;

  @IsPostTag(true)
  @IsArray()
  @Transform(({ value }) => `${value}`.split(','))
  @IsOptional()
  public tags?: string[];

  @IsIn(POSTS_ORDER_VALUES)
  @Transform(({ value }) => `${value}`.toUpperCase())
  @IsOptional()
  public order?: PostsOrder;

  @IsString()
  @IsOptional()
  public title?: string;
}
