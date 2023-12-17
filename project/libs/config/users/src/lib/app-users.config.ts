import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

export const DEFAULT_PORT = 3000;

export const ENVIRONMENTS = ['development', 'production', 'stage'] as const;

export const APP_TOKEN = 'app' as const;

export interface AppUsersConfig {
  environment: typeof ENVIRONMENTS;
  port: number;
}

export interface AppUsersConfigPart {
  [APP_TOKEN]: AppUsersConfig;
}

export const appUsersConfig = registerAs<AppUsersConfig>(APP_TOKEN, () => {
  const result = Joi.object<AppUsersConfig>({
    environment: Joi.string().valid(...ENVIRONMENTS).required(),
    port: Joi.number().port().default(DEFAULT_PORT),
  }).validate({
    environment: process.env.NODE_ENV,
    port: parseInt(process.env.PORT || `${DEFAULT_PORT}`, 10),
  }, { abortEarly: true });

  if (result.error) {
    throw new Error(`[App Users Validation Error]: ${result.error.message}`)
  }
  return result.value;
});
