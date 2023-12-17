import { ApiProperty } from '@nestjs/swagger';
import type { IUser } from '@project/libs/shared/types'
import { UsersPropDesc } from '../users.const';

export class CreateUserDto implements Partial<IUser> {
  @ApiProperty({
    description: UsersPropDesc.Email,
    example: 'user@mail.ru',
    required: true,
  })
  public email: string;

  @ApiProperty({
    description: UsersPropDesc.FirstName,
    example: 'Bob',
  })
  public firstname: string;

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
