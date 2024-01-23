import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';
import { ITokenParams } from '@project/libs/shared/types';

export const JWT_TOKEN = 'jwt' as const;

export interface JwtUsersConfig {
  accessToken: ITokenParams;
  refreshToken: ITokenParams;
}

export interface JwtUsersConfigPart {
  [JWT_TOKEN]: JwtUsersConfig;
}

export const jwtUsersConfig = registerAs<JwtUsersConfig>(JWT_TOKEN, () => {
  const result = Joi.object<JwtUsersConfig>({
    accessToken: Joi.object<ITokenParams>({
      secret: Joi.string().required(),
      expiresIn: Joi.string().required(),
    }),
    refreshToken: Joi.object<ITokenParams>({
      secret: Joi.string().required(),
      expiresIn: Joi.string().required(),
    }),
  }).validate({
    accessToken: {
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
    },
    refreshToken: {
      secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
    },
  }, { abortEarly: true });

  if (result.error) {
    throw new Error(`[App Users Validation Error]: ${result.error.message}`)
  }
  return result.value;
});
