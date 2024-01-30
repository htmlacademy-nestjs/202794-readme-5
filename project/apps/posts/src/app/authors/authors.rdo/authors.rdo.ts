import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IAuthor, IPagination } from '@project/libs/shared/types';
import { AuthorsPropDesc } from '../authors.const';
import { AuthorRdo } from './author.rdo';

export class AuthorsRdo implements IPagination<IAuthor> {
  @ApiProperty({ description: AuthorsPropDesc.Count })
  @Expose()
  public count: number;

  @ApiProperty({
    type: [AuthorRdo],
    description: AuthorsPropDesc.Count,
  })
  @Expose()
  @Type(() => AuthorRdo)
  public items: IAuthor[];

  @ApiProperty({ description: AuthorsPropDesc.Limit })
  @Expose()
  public limit?: number;

  @ApiProperty({ description: AuthorsPropDesc.Offset })
  @Expose()
  public offset?: number;

  @ApiProperty({ description: AuthorsPropDesc.Page })
  @Expose()
  public page?: number;

  @ApiProperty({ description: AuthorsPropDesc.Pages })
  @Expose()
  public pages?: number;
}
