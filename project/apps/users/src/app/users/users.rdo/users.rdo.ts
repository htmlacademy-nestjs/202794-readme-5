import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPagination, IUser } from '@project/libs/shared/types';
import { UsersPropDesc } from '../users.const';
import { UserRdo } from './user.rdo';
;

export class UsersRdo implements IPagination<IUser> {
  @ApiProperty({ description: UsersPropDesc.Count })
  @Expose()
  public count: number;

  @ApiProperty({
    type: [UserRdo],
    description: UsersPropDesc.Count,
  })
  @Expose()
  @Type(() => UserRdo)
  public items: IUser[];

  @ApiProperty({ description: UsersPropDesc.Limit })
  @Expose()
  public limit?: number;

  @ApiProperty({ description: UsersPropDesc.Offset })
  @Expose()
  public offset?: number;

  @ApiProperty({ description: UsersPropDesc.Page })
  @Expose()
  public page?: number;

  @ApiProperty({ description: UsersPropDesc.Pages })
  @Expose()
  public pages?: number;
}
