import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PostsPropDesc } from '../posts.const';

export class PostCountRdo {
  @ApiProperty({ description: PostsPropDesc.CommentsCount })
  @Expose()
  public comments: number;

  @ApiProperty({ description: PostsPropDesc.LikesCount })
  @Expose()
  public likes: number;
}
