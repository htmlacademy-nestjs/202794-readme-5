import { ApiProperty } from '@nestjs/swagger';
import { IPostTag } from '@project/libs/shared/types';
import { IsPostTag } from '@project/libs/shared/helpers';
import { TagsPropDesc } from '../tags.const';

export class CreateTagDto implements Partial<IPostTag> {
  @ApiProperty({
    description: TagsPropDesc.Text,
    example: 'coding',
    required: true,
  })
  @IsPostTag()
  public text: string;
}
