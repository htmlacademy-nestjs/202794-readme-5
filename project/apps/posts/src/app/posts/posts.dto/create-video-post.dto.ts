import { Equals, IsNotEmpty, IsUrl, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IVideoPayload, PostType } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';
import { CreatePostDto } from './create-post.dto';

export class CreateVideoPostDto extends CreatePostDto implements IVideoPayload {
  @Equals(PostType.Video)
  public type: PostType.Video;

  @ApiProperty({
    description: PostsPropDesc.PostTitle,
    required: true,
  })
  @MaxLength(50)
  @MinLength(20)
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    description: PostsPropDesc.PostVideoUrl,
    required: true,
  })
  @IsUrl({
    host_whitelist: ['www.youtube.com'],
    protocols: ['https'],
  })
  @IsNotEmpty()
  public url: string;
}
