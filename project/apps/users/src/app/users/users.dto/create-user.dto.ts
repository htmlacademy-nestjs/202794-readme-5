import { ApiProperty } from '@nestjs/swagger';
import type { IUser } from '@project/libs/shared/types'

export class CreateUserDto implements Partial<IUser> {
  @ApiProperty({
    description: 'Уникальный email пользователя',
    example: 'user@mail.ru',
    required: true,
  })
  public email: string;

  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Bob',
  })
  public firstname: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'password',
    required: true,
  })
  public password: string;

  @ApiProperty({
    description: 'Аватар пользователя',
  })
  public avatar?: string;
}
