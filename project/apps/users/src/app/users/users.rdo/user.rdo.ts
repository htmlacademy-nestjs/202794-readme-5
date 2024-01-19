import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IUser } from '@project/libs/shared/types';
import { UsersPropDesc } from '../users.const';

export class UserRdo implements Partial<IUser> {
  @ApiProperty({ description: UsersPropDesc.Id })
  @Expose()
  public id: string;

  @ApiProperty({ description: UsersPropDesc.CreatedAt })
  @Expose()
  public createdAt: Date;

  @ApiProperty({
    description: UsersPropDesc.Email,
    example: 'user@mail.ru',
  })
  @Expose()
  public email: string;

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
