import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

export const JWT_TOKEN = 'jwt' as const;

export interface JwtUsersConfig {
  secret: string;
  expires: string;
}

export interface JwtUsersConfigPart {
  [JWT_TOKEN]: JwtUsersConfig;
}

export const jwtUsersConfig = registerAs<JwtUsersConfig>(JWT_TOKEN, () => {
  const result = Joi.object<JwtUsersConfig>({
    secret: Joi.string().required(),
    expires: Joi.string().required(),
  }).validate({
    secret: process.env.JWT_AT_SECRET,
    expires: process.env.JWT_AT_EXPIRES_IN,
  }, { abortEarly: true });

  if (result.error) {
    throw new Error(`[App Users Validation Error]: ${result.error.message}`)
  }
  return result.value;
});
