import { ApiProperty } from '@nestjs/swagger';
import { IPost } from '@project/libs/shared/types'
import { PostsPropDesc } from '../posts.const';

export class UpdatePostDto implements Partial<IPost> {
  @ApiProperty({
    description: PostsPropDesc.Title,
    example: 'Title of The Post'
  })
  public title: string;
}
