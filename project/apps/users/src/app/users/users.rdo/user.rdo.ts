import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IUser } from '@project/libs/shared/types';

export class UserRdo implements IUser {
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
    description: 'Имя пользователя',
  })
  @Expose()
  public firstname: string;

  @ApiProperty({
    description: 'Аватар пользователя',
  })
  @Expose()
  public avatar: string;
}
