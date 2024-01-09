import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IAuthor } from '@project/libs/shared/types';
import { AuthorsPropDesc, AuthorsGroups } from '../authors.const';

export class AuthorRdo implements IAuthor {
  @ApiProperty({ description: AuthorsPropDesc.AuthorId })
  @Expose()
  public id: string;

  @ApiProperty({ description: AuthorsPropDesc.CreatedAt })
  @Expose({ groups: [AuthorsGroups.Detailed] })
  @Expose()
  public createdAt: Date;

  @ApiProperty({ description: AuthorsPropDesc.CommentsCount })
  @Expose({ groups: [AuthorsGroups.Detailed] })
  @Transform(({ obj }) => obj._count?.authorsComments)
  public countComments: number;

  @ApiProperty({ description: AuthorsPropDesc.PostsCount })
  @Expose({ groups: [AuthorsGroups.Detailed] })
  @Transform(({ obj }) => obj._count?.authorsPosts)
  public countPosts: number;

  @ApiProperty({ description: AuthorsPropDesc.LikesCount })
  @Expose({ groups: [AuthorsGroups.Detailed] })
  @Transform(({ obj }) => obj._count?.authorsLikes)
  public countLikes: number;
}
