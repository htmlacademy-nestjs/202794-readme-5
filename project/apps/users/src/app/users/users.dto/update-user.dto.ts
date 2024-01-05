import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IsUserName, IsUserPassword } from '@project/libs/shared/helpers';
import type { IUser } from '@project/libs/shared/types'
import { UsersPropDesc } from '../users.const';

export class UpdateUserDto implements Partial<IUser> {
  @ApiProperty({
    description: UsersPropDesc.FirstName,
    example: 'Alice',
  })
  @IsUserName()
  @IsOptional()
  public firstname?: string;

  @ApiProperty({
    description: UsersPropDesc.LastName,
    example: 'Cooper',
  })
  @IsUserName()
  @IsOptional()
  public lastname?: string;

  @ApiProperty({
    description: UsersPropDesc.Password,
    example: 'password',
  })
  @IsUserPassword()
  @IsOptional()
  public password?: string;

  @ApiProperty({
    description: UsersPropDesc.Avatar,
  })
  @IsString()
  @IsOptional()
  public avatar?: string;
}
