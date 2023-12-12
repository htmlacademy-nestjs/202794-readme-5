import { ApiProperty } from '@nestjs/swagger';
import { IPost, PostType } from '@project/libs/shared/types'

export class CreatePostDto implements Partial<IPost> {
  @ApiProperty({
    description: 'Тип поста',
    example: PostType.Text,
    required: true,
  })
  public postType: PostType;

  @ApiProperty({
    description: 'id автора поста',
    required: true,
  })
  public authorId: string;
}
