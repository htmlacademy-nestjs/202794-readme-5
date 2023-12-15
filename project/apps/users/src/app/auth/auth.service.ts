import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { matchPassword } from '@project/libs/shared/helpers';
import { CreateUserDto } from '../users/users.dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './auth.dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService
  ) {}

  public async register(dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  public async login(dto: LoginUserDto) {
    const user = await this.usersService.findByEmail(dto.email);

    if (!user) {
      throw new NotFoundException('User with email not found');
    }
    if (!await matchPassword(dto.password, user.passwordHash)) {
      throw new UnauthorizedException('The email address or password is incorrect');
    }
    return user;
  }
}
