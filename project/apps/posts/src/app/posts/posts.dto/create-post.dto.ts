import { Type } from 'class-transformer';
import { IsEnum, IsMongoId, IsNotEmptyObject, IsOptional, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsPostTags } from '@project/libs/shared/helpers';
import { IPost, PostPayload, PostType, PostTypes } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';
import { PAYLOAD_DTO_BY_POST_TYPE } from './create-payload';

export class CreatePostDto implements Partial<IPost> {
  @ApiProperty({ description: PostsPropDesc.PostType })
  @IsEnum(PostType)
  public postType: PostTypes;

  @ApiProperty({
    description: PostsPropDesc.AuthorId,
    required: true,
  })
  @IsMongoId()
  public authorId: string;

  @ApiProperty({
    description: PostsPropDesc.PostTags,
    example: ['css', 'js', 'html'],
  })
  @IsPostTags()
  @IsOptional()
  public taggedBy?: string[];

  @ApiProperty({ description: PostsPropDesc.PostPayload })
  @ValidateNested()
  @Type(({ object }) => PAYLOAD_DTO_BY_POST_TYPE[object.postType] || Object)
  @IsNotEmptyObject()
  public payload: PostPayload;
}
