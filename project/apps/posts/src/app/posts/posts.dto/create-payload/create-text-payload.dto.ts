import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ITextPayload } from '@project/libs/shared/types';
import { PostsPropDesc, TEXT_CONTENT_MAX_LENGTH, TEXT_CONTENT_MIN_LENGTH, TEXT_PREVIEW_MAX_LENGTH, TEXT_PREVIEW_MIN_LENGTH, TEXT_TITLE_MAX_LENGTH, TEXT_TITLE_MIN_LENGTH } from '../../posts.const';

export class CreateTextPayloadDto implements ITextPayload  {
  @ApiProperty({
    description: PostsPropDesc.PostTitle,
    required: true,
  })
  @MaxLength(TEXT_TITLE_MAX_LENGTH)
  @MinLength(TEXT_TITLE_MIN_LENGTH)
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    description: PostsPropDesc.PostTextPreview,
    required: true,
  })
  @MaxLength(TEXT_PREVIEW_MAX_LENGTH)
  @MinLength(TEXT_PREVIEW_MIN_LENGTH)
  @IsNotEmpty()
  public preview: string;

  @ApiProperty({
    description: PostsPropDesc.PostTextContent,
    required: true,
  })
  @MaxLength(TEXT_CONTENT_MAX_LENGTH)
  @MinLength(TEXT_CONTENT_MIN_LENGTH)
  @IsNotEmpty()
  public content: string;
}
