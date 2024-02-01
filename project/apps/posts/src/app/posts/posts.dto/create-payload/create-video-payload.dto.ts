import { IsNotEmpty, IsUrl, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IVideoPayload } from '@project/libs/shared/types';
import { PostsPropDesc, VIDEO_TITLE_MAX_LENGTH, VIDEO_TITLE_MIN_LENGTH } from '../../posts.const';

export class CreateVideoPayloadDto implements IVideoPayload {
  @ApiProperty({
    description: PostsPropDesc.PostTitle,
    required: true,
  })
  @MaxLength(VIDEO_TITLE_MAX_LENGTH)
  @MinLength(VIDEO_TITLE_MIN_LENGTH)
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
