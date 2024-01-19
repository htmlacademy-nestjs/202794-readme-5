import { IsMongoId, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PostsPropDesc } from '../posts.const';

export class RepostPostDto {
  @ApiProperty({
    description: PostsPropDesc.PostId,
    required: true,
  })
  @IsUUID()
  public postId: string;

  @ApiProperty({
    description: PostsPropDesc.AuthorId,
    required: true,
  })
  @IsMongoId()
  public authorId: string;
}
