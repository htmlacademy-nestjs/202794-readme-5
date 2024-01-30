import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPost, IPagination } from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';
import { PostRdo } from './post.rdo';

export class PostsRdo implements IPagination<IPost> {
  @ApiProperty({ description: PostsPropDesc.Count })
  @Expose()
  public count: number;

  @ApiProperty({
    type: [PostRdo],
    description: PostsPropDesc.Count,
  })
  @Expose()
  @Type(() => PostRdo)
  public items: IPost[];

  @ApiProperty({ description: PostsPropDesc.Limit })
  @Expose()
  public limit?: number;

  @ApiProperty({ description: PostsPropDesc.Offset })
  @Expose()
  public offset?: number;

  @ApiProperty({ description: PostsPropDesc.Page })
  @Expose()
  public page?: number;

  @ApiProperty({ description: PostsPropDesc.Pages })
  @Expose()
  public pages?: number;
}
