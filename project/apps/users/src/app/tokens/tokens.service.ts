import dayjs from 'dayjs';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { IRefreshTokenPayload } from '@project/libs/shared/types';
import { jwtUsersConfig } from '@project/libs/config/users';
import { parseTime } from '@project/libs/shared/helpers';
import { RefreshTokensRepository } from './refresh-tokens.repository';

@Injectable()
export class TokensService {
  constructor(
    private readonly refreshTokensRepository: RefreshTokensRepository,
    @Inject(jwtUsersConfig.KEY)
    private readonly jwtConfig: ConfigType<typeof jwtUsersConfig>,
  ) {}

  public createRefreshToken(payload: IRefreshTokenPayload) {
    const [time, unit] = parseTime(this.jwtConfig.refreshToken.expiresIn);

    return this.refreshTokensRepository.create({
      expiresIn: dayjs().add(time, unit).toDate(),
      tokenId: payload.tokenId,
      userId: payload.id,
    });
  }

  public async removeRefreshToken(tokenId: string) {
    await Promise.all([
      this.refreshTokensRepository.removeAllExpired(),
      this.refreshTokensRepository.removeByTokenId(tokenId),
    ]);
  }

  public async isRefreshTokenExists(tokenId: string): Promise<boolean> {
    return Boolean(await this.refreshTokensRepository.findByTokenId(tokenId));
  }
}
