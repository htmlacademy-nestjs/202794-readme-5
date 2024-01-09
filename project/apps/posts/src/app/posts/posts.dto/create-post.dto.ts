import { ArrayMaxSize, IsArray, IsEnum, IsOptional, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PostType } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';

export class CreatePostDto {
  @ApiProperty({ description: PostsPropDesc.PostType })
  @IsEnum(PostType)
  @IsOptional()
  public type: PostType;

  @ApiProperty({
    description: PostsPropDesc.PostTags,
    example: ['css', 'js', 'html'],
  })
  @MaxLength(10, { each: true })
  @MinLength(3, { each: true })
  @ArrayMaxSize(8)
  @IsArray()
  @IsOptional()
  public tags: string[];
}
