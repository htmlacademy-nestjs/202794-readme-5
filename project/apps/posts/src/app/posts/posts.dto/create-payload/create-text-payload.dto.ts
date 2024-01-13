import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ITextPayload } from '@project/libs/shared/types';
import { PostsPropDesc } from '../../posts.const';

export class CreateTextPayloadDto implements ITextPayload  {
  @ApiProperty({
    description: PostsPropDesc.PostTitle,
    required: true,
  })
  @MaxLength(50)
  @MinLength(20)
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    description: PostsPropDesc.PostTextPreview,
    required: true,
  })
  @MaxLength(255)
  @MinLength(50)
  @IsNotEmpty()
  public preview: string;

  @ApiProperty({
    description: PostsPropDesc.PostTextContent,
    required: true,
  })
  @MaxLength(1024)
  @MinLength(100)
  @IsNotEmpty()
  public content: string;
}
