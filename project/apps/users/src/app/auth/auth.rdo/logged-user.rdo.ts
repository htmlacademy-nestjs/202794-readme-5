import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IUser } from '@project/libs/shared/types';
import { UsersPropDesc } from '../../users/users.const';

export class LoggedUserRdo implements Partial<IUser> {
  @ApiProperty({ description: UsersPropDesc.Id })
  @Expose()
  @Transform(({ obj }) => `${obj._id}`)
  public id: string;

  @ApiProperty({ description: UsersPropDesc.Email })
  @Expose()
  public email: string;

  @ApiProperty({ description: UsersPropDesc.Token })
  @Expose()
  public accessToken: string;
}
