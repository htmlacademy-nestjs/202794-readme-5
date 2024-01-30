import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPagination, IPostTag } from '@project/libs/shared/types';
import { TagsPropDesc } from '../tags.const';
import { TagRdo } from './tag.rdo';
;

export class TagsRdo implements IPagination<IPostTag> {
  @ApiProperty({ description: TagsPropDesc.Count })
  @Expose()
  public count: number;

  @ApiProperty({
    type: [TagRdo],
    description: TagsPropDesc.Count,
  })
  @Expose()
  @Type(() => TagRdo)
  public items: IPostTag[];

  @ApiProperty({ description: TagsPropDesc.Limit })
  @Expose()
  public limit?: number;

  @ApiProperty({ description: TagsPropDesc.Offset })
  @Expose()
  public offset?: number;

  @ApiProperty({ description: TagsPropDesc.Page })
  @Expose()
  public page?: number;

  @ApiProperty({ description: TagsPropDesc.Pages })
  @Expose()
  public pages?: number;
}
