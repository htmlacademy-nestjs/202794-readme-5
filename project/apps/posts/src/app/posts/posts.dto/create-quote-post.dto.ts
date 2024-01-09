import { Equals, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IQuotePayload, PostType } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';
import { CreatePostDto } from './create-post.dto';

export class CreateQuotePostDto extends CreatePostDto implements IQuotePayload {
  @Equals(PostType.Quote)
  public type: PostType.Quote;

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
