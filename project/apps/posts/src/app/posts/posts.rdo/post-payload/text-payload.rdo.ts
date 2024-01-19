import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ITextPayload } from '@project/libs/shared/types';
import { PostsPropDesc } from '../../posts.const';

export class TextPayloadRdo implements ITextPayload {
  @ApiProperty({ description: PostsPropDesc.PostTitle })
  @Expose()
  public title: string;

  @ApiProperty({ description: PostsPropDesc.PostTextPreview })
  @Expose()
  public preview: string;

  @ApiProperty({ description: PostsPropDesc.PostTextContent })
  @Expose()
  public content: string;
}
