import { ApiProperty } from '@nestjs/swagger';
import type { IUser } from '@project/libs/shared/types'
import { UsersPropDesc } from '../users.const';

export class UpdateUserDto implements Partial<IUser> {
  @ApiProperty({
    description: UsersPropDesc.FirstName,
    example: 'Alice',
  })
  public firstname: string;

  @ApiProperty({
    description: UsersPropDesc.LastName,
    example: 'Cooper',
  })
  public lastname: string;

  @ApiProperty({
    description: UsersPropDesc.Password,
    example: 'password',
  })
  public password: string;

  @ApiProperty({
    description: UsersPropDesc.Avatar,
  })
  public avatar?: string;
}
