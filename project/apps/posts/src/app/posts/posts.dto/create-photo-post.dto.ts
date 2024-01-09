import { Equals, IsNotEmpty, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IPhotoPayload, PostType } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';
import { CreatePostDto } from './create-post.dto';

export class CreatePhotoPostDto extends CreatePostDto implements IPhotoPayload {
  @Equals(PostType.Photo)
  public type: PostType.Photo;

  @ApiProperty({
    description: PostsPropDesc.PostPhotoUrl,
    required: true,
  })
  @IsUrl()
  @IsNotEmpty()
  public url: string;
}
