import { ApiProperty } from '@nestjs/swagger';
import { IPostComment } from '@project/libs/shared/types'

export class CreateCommentDto implements Partial<IPostComment> {
  @ApiProperty({
    description: 'id поста комментария',
    required: true,
  })
  public postId: string;

  @ApiProperty({
    description: 'Текст комментария',
    required: true,
  })
  public message: string;
}
