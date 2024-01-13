import { IsUUID, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IPostLike } from '@project/libs/shared/types';
import { LikesPropDesc } from '../likes.const';

export class RemoveLikeDto implements Partial<IPostLike> {
  @ApiProperty({
    description: LikesPropDesc.AuthorId,
    required: true,
  })
  @IsMongoId()
  public authorId: string;

  @ApiProperty({
    description: LikesPropDesc.PostId,
    required: true,
  })
  @IsUUID()
  public postId: string;
}
