import { ApiProperty } from '@nestjs/swagger';
import type { IUser } from '@project/libs/shared/types'
import { UsersPropDesc } from '../../users/users.const';

export class RegisterUserDto implements Partial<IUser> {
  @ApiProperty({
    description: UsersPropDesc.Email,
    example: 'user@mail.ru',
    required: true,
  })
  public email: string;

  @ApiProperty({
    description: UsersPropDesc.Login,
    example: 'user123',
    required: true,
  })
  public login: string;

  @ApiProperty({
    description: UsersPropDesc.Password,
    example: 'password',
    required: true,
  })
  public password: string;

  @ApiProperty({
    description: UsersPropDesc.Avatar,
  })
  public avatar?: string;
}
