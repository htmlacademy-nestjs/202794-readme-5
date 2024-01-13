import { ApiProperty } from '@nestjs/swagger';
import { IPostComment } from '@project/libs/shared/types';
import { IsPostComment } from '@project/libs/shared/helpers';
import { CommentsPropDesc } from '../comments.const';

export class UpdateCommentDto implements Partial<IPostComment> {
  @ApiProperty({
    description: CommentsPropDesc.Message,
    example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    required: true,
  })
  @IsPostComment()
  public message: string;
}
