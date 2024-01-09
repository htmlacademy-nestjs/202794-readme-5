import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPostTag } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';

export class PostTagRdo implements Partial<IPostTag> {
  @ApiProperty({ description: PostsPropDesc.PostTagId })
  @Expose()
  public id?: string;

  @ApiProperty({ description: PostsPropDesc.PostTagText })
  @Expose()
  public text: string;
}
