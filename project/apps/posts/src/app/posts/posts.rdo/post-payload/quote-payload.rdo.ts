import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IQuotePayload } from '@project/libs/shared/types';
import { PostsPropDesc } from '../../posts.const';

export class QuotePayloadRdo implements IQuotePayload {
  @ApiProperty({ description: PostsPropDesc.PostQuoteContent })
  @Expose()
  public content: string;

  @ApiProperty({ description: PostsPropDesc.PostQuoteAuthor })
  @Expose()
  public author: string;
}
