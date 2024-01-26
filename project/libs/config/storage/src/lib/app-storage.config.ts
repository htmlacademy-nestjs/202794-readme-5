import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

export const DEFAULT_PORT = 3008;

export const ENVIRONMENTS = ['development', 'production', 'stage'] as const;

export const APP_TOKEN = 'app' as const;

export interface AppStorageConfig {
  environment: typeof ENVIRONMENTS;
  name: string;
  port: number;
  path: {
    pwd: string;
    uploads: string;
    statics: string;
  };
  api: {
    version: string;
    prefix: string;
  };
}

export interface AppStorageConfigPart {
  [APP_TOKEN]: AppStorageConfig;
}

export const appStorageConfig = registerAs<AppStorageConfig>(APP_TOKEN, () => {
  const result = Joi.object<AppStorageConfig>({
    environment: Joi.string().valid(...ENVIRONMENTS).required(),
    name: Joi.string().required(),
    port: Joi.number().port().default(DEFAULT_PORT),
    path: Joi.object({
      pwd: Joi.string().required(),
      uploads: Joi.string().required(),
      statics: Joi.string().required(),
    }),
    api: Joi.object({
      version: Joi.string().required(),
      prefix: Joi.string().required(),
    }),
  }).validate({
    environment: process.env.NODE_ENV,
    name: process.env.APP_NAME,
    port: parseInt(process.env.APP_PORT || `${DEFAULT_PORT}`, 10),
    path: {
      pwd: __dirname,
      uploads: process.env.APP_UPLOADS_PATH,
      statics: process.env.APP_STATICS_PATH,
    },
    api: {
      version: process.env.APP_API_VERSION,
      prefix: process.env.APP_API_PREFIX,
    },
  }, { abortEarly: true });

  if (result.error) {
    throw new Error(`[App Storage Validation Error]: ${result.error.message}`)
  }
  return result.value;
});
