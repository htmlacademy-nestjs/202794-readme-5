import { IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IPostLike } from '@project/libs/shared/types';
import { LikesPropDesc } from '../likes.const';

export class CreateLikeDto implements Partial<IPostLike> {
  @ApiProperty({ description: LikesPropDesc.AuthorId })
  @IsUUID()
  @IsOptional()
  public authorId: string;

  @ApiProperty({ description: LikesPropDesc.UserId })
  @IsOptional()
  public userId: string;

  @ApiProperty({
    description: LikesPropDesc.PostId,
    required: true,
  })
  @IsUUID()
  public postId: string;
}
