import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPostTag } from '@project/libs/shared/types';
import { TagsPropDesc } from '../tags.const';

export class TagRdo implements Partial<IPostTag> {
  @ApiProperty({ description: TagsPropDesc.TagId })
  @Expose()
  public id: string;

  @ApiProperty({ description: TagsPropDesc.CreatedAt })
  @Expose()
  public createdAt: Date;

  @ApiProperty({ description: TagsPropDesc.UpdatedAt })
  @Expose()
  public updatedAt: Date;

  @ApiProperty({ description: TagsPropDesc.Text })
  @Expose()
  public text: string;
}
