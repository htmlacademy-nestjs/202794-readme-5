import { ApiProperty } from '@nestjs/swagger';
import type { IUser } from '@project/libs/shared/types'
import { IsUserEmail, IsUserPassword } from '@project/libs/shared/helpers';
import { AuthPropDesc } from '../auth.const';

export class SinginUserDto implements Partial<IUser> {
  @ApiProperty({
    description: AuthPropDesc.Email,
    example: 'alice@mail.com',
    required: true,
  })
  @IsUserEmail()
  public email: string;

  @ApiProperty({
    description: AuthPropDesc.Password,
    example: 'password',
    required: true,
  })
  @IsUserPassword()
  public password: string;
}
