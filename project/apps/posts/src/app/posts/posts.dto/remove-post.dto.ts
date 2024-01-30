import { IsMongoId, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IPost} from '@project/libs/shared/types';
import { PostsPropDesc } from '../posts.const';

export class RemovePostDto implements Partial<IPost> {
  @ApiPropertyOptional({
    description: PostsPropDesc.AuthorId,
    required: true,
  })
  @IsMongoId()
  @IsOptional()
  public authorId?: string;
}
