import { IsNotEmpty, IsOptional, IsUrl, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ILinkPayload } from '@project/libs/shared/types';
import { LINK_DESC_MAX_LENGTH, PostsPropDesc } from '../../posts.const';

export class CreateLinkPayloadDto implements ILinkPayload {
  @ApiProperty({
    description: PostsPropDesc.PostLinkUrl,
    required: true,
  })
  @IsUrl()
  @IsNotEmpty()
  public url: string;

  @ApiProperty({ description: PostsPropDesc.PostLinkDesc })
  @MaxLength(LINK_DESC_MAX_LENGTH)
  @IsNotEmpty()
  @IsOptional()
  public desc: string;
}
