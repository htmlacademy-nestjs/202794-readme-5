import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { matchPassword } from '@project/libs/shared/helpers';
import { IAuthUser, ITokenPayload } from '@project/libs/shared/types';
import { UsersService } from '../users/users.service';
import { SinginUserDto } from './auth.dto/singin-user.dto';
import { SingupUserDto } from './auth.dto/singup-user.dto';
import { UpdateUserDto } from './auth.dto/update-user.dto';
import { AuthErrorMessage } from './auth.const';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  protected async matchPasswordOrThrow(password: string, user: IAuthUser) {
    if (!await matchPassword(password, user.passwordHash)) {
      throw new UnauthorizedException(AuthErrorMessage.PasswordIsNotMatch);
    }
  }

  public async singup(dto: SingupUserDto) {
    return this.usersService.create(dto);
  }

  public async singin(dto: SinginUserDto) {
    const user = await this.usersService.findByEmailOrThrow(dto.email);
    await this.matchPasswordOrThrow(dto.password, user);

    const { id, email } = user;
    const payload: ITokenPayload = { id, email };
    const accessToken = await this.jwtService.signAsync(payload);

    return { id, email, accessToken };
  }

  public async getUser(id: string) {
    return this.usersService.findOne(id);
  }

  public async updateUser(id: string, dto: UpdateUserDto) {
    const user = await this.usersService.findOneOrThrow(id);
    await this.matchPasswordOrThrow(dto.password, user);

    return this.usersService.update(id, { password: dto.passwordNew });
  }
}
