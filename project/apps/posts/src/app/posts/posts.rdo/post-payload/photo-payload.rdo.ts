import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPhotoPayload } from '@project/libs/shared/types';
import { PostsPropDesc } from '../../posts.const';

export class PhotoPayloadRdo implements IPhotoPayload {
  @ApiProperty({ description: PostsPropDesc.PostPhotoUrl })
  @Expose()
  public url: string;
}
