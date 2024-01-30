import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPagination, IPostLike } from '@project/libs/shared/types';
import { LikesPropDesc } from '../likes.const';
import { LikeRdo } from './like.rdo';


export class LikesRdo implements IPagination<IPostLike> {
  @ApiProperty({ description: LikesPropDesc.Count })
  @Expose()
  public count: number;

  @ApiProperty({
    type: [LikeRdo],
    description: LikesPropDesc.Count,
  })
  @Expose()
  @Type(() => LikeRdo)
  public items: IPostLike[];

  @ApiProperty({ description: LikesPropDesc.Limit })
  @Expose()
  public limit?: number;

  @ApiProperty({ description: LikesPropDesc.Offset })
  @Expose()
  public offset?: number;

  @ApiProperty({ description: LikesPropDesc.Page })
  @Expose()
  public page?: number;

  @ApiProperty({ description: LikesPropDesc.Pages })
  @Expose()
  public pages?: number;
}
