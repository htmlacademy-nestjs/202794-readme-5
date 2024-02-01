import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IQuotePayload } from '@project/libs/shared/types';
import { PostsPropDesc, QUOTE_AUTHOR_MAX_LENGTH, QUOTE_AUTHOR_MIN_LENGTH, QUOTE_CONTENT_MAX_LENGTH, QUOTE_CONTENT_MIN_LENGTH } from '../../posts.const';

export class CreateQuotePayloadDto implements IQuotePayload {
  @ApiProperty({
    description: PostsPropDesc.PostQuoteContent,
    required: true,
  })
  @MaxLength(QUOTE_CONTENT_MAX_LENGTH)
  @MinLength(QUOTE_CONTENT_MIN_LENGTH)
  @IsNotEmpty()
  public content: string;

  @ApiProperty({
    description: PostsPropDesc.PostQuoteAuthor,
    required: true,
  })
  @MaxLength(QUOTE_AUTHOR_MAX_LENGTH)
  @MinLength(QUOTE_AUTHOR_MIN_LENGTH)
  @IsNotEmpty()
  public author: string;
}
