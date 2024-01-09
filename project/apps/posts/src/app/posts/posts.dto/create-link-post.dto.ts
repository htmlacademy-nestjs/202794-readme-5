import { Equals, IsNotEmpty, IsOptional, IsUrl, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ILinkPayload, PostType } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';
import { CreatePostDto } from './create-post.dto';

export class CreateLinkPostDto extends CreatePostDto implements ILinkPayload {
  @Equals(PostType.Link)
  public type: PostType.Link;

  @ApiProperty({
    description: PostsPropDesc.PostLinkUrl,
    required: true,
  })
  @IsUrl()
  @IsNotEmpty()
  public url: string;

  @ApiProperty({
    description: PostsPropDesc.PostLinkDesc,
    required: true,
  })
  @MaxLength(300)
  @IsNotEmpty()
  @IsOptional()
  public desc: string;
}
