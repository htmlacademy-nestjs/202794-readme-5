import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { ITokenPayload } from '@project/libs/shared/types';
import { ConfigUsers } from '@project/libs/config/users';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService<ConfigUsers>,
  ) {
    super(JwtAccessStrategy.getStrategyOptions(
      configService.get('jwt.accessToken.secret', { infer: true }),
    ));
  }

  public async validate(payload: ITokenPayload) {
    return payload;
  }

  public static getStrategyOptions(secretOrKey: string): StrategyOptions {
    return {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretOrKey,
    };
  }
}
