import { ApiProperty } from '@nestjs/swagger';
import { IPost, PostType } from '@project/libs/shared/types'
import { PostsPropDesc } from '../posts.const';

export class CreatePostDto implements Partial<IPost> {
  @ApiProperty({
    description: PostsPropDesc.PostType,
    example: PostType.Text,
    required: true,
  })
  public postType: PostType;

  @ApiProperty({
    description: PostsPropDesc.AuthorId,
    example: '657da7a18fca7b1eb751eba0',
    required: true,
  })
  public authorId: string;

  @ApiProperty({
    description: PostsPropDesc.Title,
    example: 'Title of The Post'
  })
  public title: string;
}
