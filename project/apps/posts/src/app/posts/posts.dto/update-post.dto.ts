import { Type } from 'class-transformer';
import { IsEnum, IsMongoId, IsNotEmptyObject, IsOptional, ValidateNested } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IPost, PostPayload, PostType, PostTypes } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';
import { PAYLOAD_DTO_BY_POST_TYPE } from './create-payload';

export class UpdatePostDto implements Partial<IPost> {
  @ApiPropertyOptional({
    description: PostsPropDesc.AuthorId,
    required: true,
  })
  @IsMongoId()
  @IsOptional()
  public authorId?: string;

  @ApiProperty({
    enum: PostType,
    enumName: 'PostType',
    description: PostsPropDesc.PostType,
  })
  @IsEnum(PostType)
  public postType: PostTypes;

  @ApiProperty({ description: PostsPropDesc.PostPayload })
  @ValidateNested()
  @Type(({ object }) => PAYLOAD_DTO_BY_POST_TYPE[object.postType] || Object)
  @IsNotEmptyObject()
  public payload: PostPayload;
}
