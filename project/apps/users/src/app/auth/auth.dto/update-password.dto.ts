import { ApiProperty } from '@nestjs/swagger';
import { IsUserPassword } from '@project/libs/shared/helpers';
import { AuthPropDesc } from '../auth.const';

export class UpdatePasswordDto {
  @ApiProperty({
    description: AuthPropDesc.Password,
    example: 'password',
    required: true,
  })
  @IsUserPassword()
  public password: string;

  @ApiProperty({
    description: AuthPropDesc.PasswordNew,
    example: 'password',
    required: true,
  })
  @IsUserPassword()
  public passwordNew: string;
}
