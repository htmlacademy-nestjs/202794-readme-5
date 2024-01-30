import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

export const DEFAULT_PORT = 3000;

export const ENVIRONMENTS = ['development', 'production', 'stage'] as const;

export const APP_TOKEN = 'app' as const;

export interface AppApiConfig {
  environment: typeof ENVIRONMENTS;
  name: string;
  port: number;
  api: {
    version: string;
    prefix: string;
  };
  url: {
    notify: string;
    posts: string;
    storage: string;
    users: string;
  };
}

export interface AppApiConfigPart {
  [APP_TOKEN]: AppApiConfig;
}

export const appApiConfig = registerAs<AppApiConfig>(APP_TOKEN, () => {
  const result = Joi.object<AppApiConfig>({
    environment: Joi.string().valid(...ENVIRONMENTS).required(),
    name: Joi.string().required(),
    port: Joi.number().port().default(DEFAULT_PORT),
    api: Joi.object({
      version: Joi.string().required(),
      prefix: Joi.string().required(),
    }),
    url: Joi.object({
      notify: Joi.string().required(),
      posts: Joi.string().required(),
      storage: Joi.string().required(),
      users: Joi.string().required(),
    }),
  }).validate({
    environment: process.env.NODE_ENV,
    name: process.env.APP_NAME,
    port: parseInt(process.env.APP_PORT || `${DEFAULT_PORT}`, 10),
    api: {
      version: process.env.APP_API_VERSION,
      prefix: process.env.APP_API_PREFIX,
    },
    url: {
      notify: process.env.APP_NOTIFY_URL,
      posts: process.env.APP_POSTS_URL,
      storage: process.env.APP_STORAGE_URL,
      users: process.env.APP_USERS_URL,
    },
  }, { abortEarly: true });

  if (result.error) {
    throw new Error(`[App Api Validation Error]: ${result.error.message}`)
  }
  return result.value;
});
