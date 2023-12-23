import { Injectable, UnauthorizedException } from '@nestjs/common';
import { matchPassword } from '@project/libs/shared/helpers';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './auth.dto/login-user.dto';
import { RegisterUserDto } from './auth.dto/register-user.dto';
import { AuthErrorMessage } from './auth.const';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  public async register(dto: RegisterUserDto) {
    return this.usersService.create(dto);
  }

  public async login(dto: LoginUserDto) {
    const user = await this.usersService.findByEmail(dto.email);

    if (!await matchPassword(dto.password, user.passwordHash)) {
      throw new UnauthorizedException(AuthErrorMessage.UserIsUnauthorized);
    }
    return user;
  }
}
