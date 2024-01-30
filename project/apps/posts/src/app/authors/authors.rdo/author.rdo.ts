import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IAuthor } from '@project/libs/shared/types';
import { AuthorsPropDesc } from '../authors.const';

export class AuthorRdo implements IAuthor {
  @ApiProperty({ description: AuthorsPropDesc.AuthorId })
  @Expose()
  public id: string;

  @ApiProperty({ description: AuthorsPropDesc.CreatedAt })
  @Expose()
  public createdAt: Date;

  @ApiProperty({ description: AuthorsPropDesc.CommentsCount })
  @Transform(({ obj }) => obj._count?.authorsComments)
  @Expose()
  public countComments: number;

  @ApiProperty({ description: AuthorsPropDesc.PostsCount })
  @Transform(({ obj }) => obj._count?.authorsPosts)
  @Expose()
  public countPosts: number;

  @ApiProperty({ description: AuthorsPropDesc.LikesCount })
  @Transform(({ obj }) => obj._count?.authorsLikes)
  @Expose()
  public countLikes: number;
}
