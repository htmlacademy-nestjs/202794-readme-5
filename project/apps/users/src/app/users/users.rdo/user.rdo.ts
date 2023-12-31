import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IUser } from '@project/libs/shared/types';
import { UsersPropDesc } from '../users.const';

export class UserRdo implements IUser {
  @ApiProperty({
    description: UsersPropDesc.Id,
  })
  @Expose()
  @Transform(({ obj }) => `${obj._id}`)
  public id: string;

  @ApiProperty({ description: UsersPropDesc.CreatedAt })
  @Expose()
  public createdAt: Date;

  @ApiProperty({ description: UsersPropDesc.UpdatedAt })
  @Expose()
  public updatedAt: Date;

  @ApiProperty({
    description: UsersPropDesc.Email,
    example: 'user@mail.ru',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: UsersPropDesc.Login,
    example: 'user123',
  })
  @Expose()
  public login: string;

  @ApiProperty({ description: UsersPropDesc.FirstName })
  @Expose()
  public firstname: string;

  @ApiProperty({ description: UsersPropDesc.LastName })
  @Expose()
  public lastname: string;

  @ApiProperty({ description: UsersPropDesc.Avatar })
  @Expose()
  public avatar: string;
}
