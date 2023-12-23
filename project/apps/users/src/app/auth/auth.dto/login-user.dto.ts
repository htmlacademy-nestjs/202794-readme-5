import { ApiProperty } from '@nestjs/swagger';
import type { IUser } from '@project/libs/shared/types'
import { UsersPropDesc } from '../../users/users.const';

export class LoginUserDto implements Partial<IUser> {
  @ApiProperty({
    description: UsersPropDesc.Email,
    required: true,
  })
  public email: string;

  @ApiProperty({
    description: UsersPropDesc.Password,
    required: true,
  })
  public password: string;
}
