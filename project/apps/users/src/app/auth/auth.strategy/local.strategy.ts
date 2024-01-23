import { Strategy, IStrategyOptions } from 'passport-local';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { USERNAME_FIELD_NAME } from '../auth.const';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
  ) {
    super(LocalStrategy.getStrategyOptions());
  }

  public async validate(email: string, password: string) {
    return this.authService.verify({ email, password });
  }

  public static getStrategyOptions(): IStrategyOptions {
    return { usernameField: USERNAME_FIELD_NAME };
  }
}
