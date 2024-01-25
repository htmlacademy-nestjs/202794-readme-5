import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { IRefreshTokenPayload } from '@project/libs/shared/types';
import { ConfigUsers } from '@project/libs/config/users';
import { TokensService } from '../../tokens/tokens.service';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    private readonly configService: ConfigService<ConfigUsers>,
    private readonly authService: AuthService,
    private readonly tokensService: TokensService,
  ) {
    super(JwtRefreshStrategy.getStrategyOptions(
      configService.get('jwt.refreshToken.secret', { infer: true }),
    ));
  }

  public async validate(payload: IRefreshTokenPayload) {
    if (! await this.tokensService.isRefreshTokenExists(payload.tokenId)) {
      throw new UnauthorizedException(`Token with id ${payload.tokenId} does not exists`)
    }
    await this.tokensService.removeRefreshToken(payload.tokenId);

    return this.authService.getUser(payload.id);
  }

  public static getStrategyOptions(secretOrKey: string): StrategyOptions {
    return {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretOrKey,
    };
  }
}
