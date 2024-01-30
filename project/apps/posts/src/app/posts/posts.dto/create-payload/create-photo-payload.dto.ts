import { IsNotEmpty, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IPhotoPayload } from '@project/libs/shared/types';
import { PostsPropDesc } from '../../posts.const';

export class CreatePhotoPayloadDto implements IPhotoPayload {
  @ApiProperty({
    description: PostsPropDesc.PostPhotoUrl,
    required: true,
  })
  @IsUrl({
    require_host: false,
  })
  @IsNotEmpty()
  public url: string;
}
