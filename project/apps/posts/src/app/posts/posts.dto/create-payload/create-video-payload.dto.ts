import { IsNotEmpty, IsUrl, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IVideoPayload } from '@project/libs/shared/types';
import { PostsPropDesc } from '../../posts.const';

export class CreateVideoPayloadDto implements IVideoPayload {
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
