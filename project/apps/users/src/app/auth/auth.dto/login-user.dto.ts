import { ApiProperty } from '@nestjs/swagger';
import type { IUser } from '@project/libs/shared/types'

export class LoginUserDto implements Partial<IUser> {
  @ApiProperty({
    description: 'Уникальный email пользователя',
    example: 'user@mail.ru',
  })
  public email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'password',
  })
  public password: string;
}
