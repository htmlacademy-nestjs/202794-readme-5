import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TagsPropDesc } from '../tags.const';
import { ICreateTag } from '../tag.entity';

export class CreateTagDto implements ICreateTag {
  @ApiProperty({
    description: TagsPropDesc.Text,
    example: 'coding',
    required: true,
  })
  @IsString()
  public text: string;
}
