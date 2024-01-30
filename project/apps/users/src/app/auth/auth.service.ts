import * as crypto from 'node:crypto';
import { Inject, Injectable, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import { IRefreshTokenPayload, ITokenPayload } from '@project/libs/shared/types';
import { jwtUsersConfig } from '@project/libs/config/users';
import { PublishService } from '@project/libs/notify/publish';
import { User } from '../users/user.entity';
import { TokensService } from '../tokens/tokens.service';
import { UsersService } from '../users/users.service';
import { SinginUserDto } from './auth.dto/singin-user.dto';
import { SingupUserDto } from './auth.dto/singup-user.dto';
import { UpdatePasswordDto } from './auth.dto/update-password.dto';
import { AuthErrorMessage } from './auth.const';

@Injectable()
export class AuthService {
  constructor(
    @Inject(jwtUsersConfig.KEY)
    private readonly jwtConfig: ConfigType<typeof jwtUsersConfig>,
    private readonly jwtService: JwtService,
    private readonly publishService: PublishService,
    private readonly tokensService: TokensService,
    private readonly usersService: UsersService,
  ) {}

  /**
   * Регистрация пользователя
   */
  public async singup(dto: SingupUserDto) {
    const user = await this.usersService.create(dto);
    const { email, firstname, lastname } = user;
    await this.publishService.notifyUserSingup({ email, firstname, lastname });
    await this.publishService.notifyUserSubscribe({ email, firstname, lastname });
    return user;
  }

  /**
   * Авторизация пользователя
   */
  public async singin(user: User) {
    try {
      const { id, email } = user;
      const tokenId = crypto.randomUUID();

      await this.tokensService.createRefreshToken({ id, email, tokenId });

      const accessPayload: ITokenPayload = { id, email };
      const accessToken = await this.jwtService.signAsync(accessPayload);

      const { secret, expiresIn } = this.jwtConfig.refreshToken;
      const refreshPayload: IRefreshTokenPayload = { id, email, tokenId };
      const refreshToken = await this.jwtService.signAsync(refreshPayload, { secret, expiresIn });

      return { id, email, accessToken, refreshToken };
    } catch (error) {
      throw new InternalServerErrorException('Can not create jwt token');
    }
  }

  public async verify(dto: SinginUserDto) {
    const user = await this.usersService.findByEmail(dto.email);

    if (await user?.matchPassword(dto.password)) {
      return user;
    }
  }

  /**
   * Возвращает авторизованного пользователя
   */
  public async getUser(id: string) {
    return this.usersService.findOne(id);
  }

  /**
   * Изменить пароль авторизованного пользователя
   */
  public async updateUserPassword(id: string, dto: UpdatePasswordDto) {
    const user = await this.usersService.findOne(id);

    if (! await user?.matchPassword(dto.password)) {
      throw new UnauthorizedException(AuthErrorMessage.PasswordIsNotMatch);
    }
    return this.usersService.update(id, { password: dto.passwordNew });
  }
}
