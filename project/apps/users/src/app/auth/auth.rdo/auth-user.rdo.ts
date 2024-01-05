import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IUser } from '@project/libs/shared/types';
import { AuthPropDesc } from '../auth.const';

export class AuthUserRdo implements Partial<IUser> {
  @ApiProperty({ description: AuthPropDesc.Id })
  @Expose()
  public id: string;

  @ApiProperty({ description: AuthPropDesc.Email })
  @Expose()
  public email: string;

  @ApiProperty({ description: AuthPropDesc.Token })
  @Expose()
  public accessToken: string;
}
