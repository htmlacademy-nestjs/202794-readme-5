import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IUser } from '@project/libs/shared/types';

export class LoggedUserRdo implements Partial<IUser> {
  @ApiProperty({
    description: 'Индентификатор пользователя',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'Уникальный email пользователя',
    example: 'user@mail.ru',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Токен авторизации пользователя',
  })
  @Expose()
  public accessToken: string;
}
