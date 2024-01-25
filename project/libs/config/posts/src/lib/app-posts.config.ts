import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

export const DEFAULT_PORT = 3000;

export const ENVIRONMENTS = ['development', 'production', 'stage'] as const;

export const APP_TOKEN = 'app' as const;

export interface AppPostsConfig {
  environment: typeof ENVIRONMENTS;
  name: string;
  port: number;
  api: {
    version: string;
    prefix: string;
  };
}

export interface AppPostsConfigPart {
  [APP_TOKEN]: AppPostsConfig;
}

export const appPostsConfig = registerAs<AppPostsConfig>(APP_TOKEN, () => {
  const result = Joi.object<AppPostsConfig>({
    environment: Joi.string().valid(...ENVIRONMENTS).required(),
    name: Joi.string().required(),
    port: Joi.number().port().default(DEFAULT_PORT),
    api: Joi.object({
      version: Joi.string().required(),
      prefix: Joi.string().required(),
    }),
  }).validate({
    environment: process.env.NODE_ENV,
    name: process.env.APP_NAME,
    port: parseInt(process.env.APP_PORT || `${DEFAULT_PORT}`, 10),
    api: {
      version: process.env.APP_API_VERSION,
      prefix: process.env.APP_API_PREFIX,
    },
  }, { abortEarly: true });

  if (result.error) {
    throw new Error(`[App Posts Validation Error]: ${result.error.message}`)
  }
  return result.value;
});
