import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPagination, IPostComment } from '@project/libs/shared/types';
import { CommentsPropDesc } from '../comments.const';
import { CommentRdo } from './comment.rdo';
;

export class CommentsRdo implements IPagination<IPostComment> {
  @ApiProperty({ description: CommentsPropDesc.Count })
  @Expose()
  public count: number;

  @ApiProperty({
    type: [CommentRdo],
    description: CommentsPropDesc.Count,
  })
  @Expose()
  @Type(() => CommentRdo)
  public items: IPostComment[];

  @ApiProperty({ description: CommentsPropDesc.Limit })
  @Expose()
  public limit?: number;

  @ApiProperty({ description: CommentsPropDesc.Offset })
  @Expose()
  public offset?: number;

  @ApiProperty({ description: CommentsPropDesc.Page })
  @Expose()
  public page?: number;

  @ApiProperty({ description: CommentsPropDesc.Pages })
  @Expose()
  public pages?: number;
}
