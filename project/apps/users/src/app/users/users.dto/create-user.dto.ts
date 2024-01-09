import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IsUserEmail, IsUserName, IsUserPassword } from '@project/libs/shared/helpers';
import type { IUser } from '@project/libs/shared/types'
import { UsersPropDesc } from '../users.const';

export class CreateUserDto implements Partial<IUser> {
  @ApiProperty({
    description: UsersPropDesc.Email,
    example: 'alice@mail.com',
    required: true,
  })
  @IsUserEmail()
  public email: string;

  @ApiProperty({
    description: UsersPropDesc.FirstName,
    example: 'Alice',
    required: true,
  })
  @IsUserName()
  public firstname: string;

  @ApiProperty({
    description: UsersPropDesc.LastName,
    example: 'Cooper',
    required: true,
  })
  @IsUserName()
  public lastname: string;

  @ApiProperty({
    description: UsersPropDesc.Password,
    example: 'password',
    required: true,
  })
  @IsUserPassword()
  public password: string;

  @ApiProperty({
    description: UsersPropDesc.Avatar,
  })
  @IsString()
  @IsOptional()
  public avatar?: string;
}
