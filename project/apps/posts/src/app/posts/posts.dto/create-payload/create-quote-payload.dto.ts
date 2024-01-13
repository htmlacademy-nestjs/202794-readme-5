import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IQuotePayload } from '@project/libs/shared/types';
import { PostsPropDesc } from '../../posts.const';

export class CreateQuotePayloadDto implements IQuotePayload {
  @ApiProperty({
    description: PostsPropDesc.PostQuoteContent,
    required: true,
  })
  @MaxLength(300)
  @MinLength(20)
  @IsNotEmpty()
  public content: string;

  @ApiProperty({
    description: PostsPropDesc.PostQuoteAuthor,
    required: true,
  })
  @MaxLength(50)
  @MinLength(3)
  @IsNotEmpty()
  public author: string;
}
