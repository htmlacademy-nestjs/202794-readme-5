import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IVideoPayload } from '@project/libs/shared/types';
import { PostsPropDesc } from '../../posts.const';

export class VideoPayloadRdo implements IVideoPayload {
  @ApiProperty({ description: PostsPropDesc.PostTitle })
  @Expose()
  public title: string;

  @ApiProperty({ description: PostsPropDesc.PostVideoUrl })
  @Expose()
  public url: string;
}
