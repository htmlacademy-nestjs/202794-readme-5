import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ILinkPayload } from '@project/libs/shared/types';
import { PostsPropDesc } from '../../posts.const';

export class LinkPayloadRdo implements ILinkPayload {
  @ApiProperty({ description: PostsPropDesc.PostLinkUrl })
  @Expose()
  public url: string;

  @ApiProperty({ description: PostsPropDesc.PostLinkDesc })
  @Expose()
  public desc: string;
}
