import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

export const DEFAULT_MONGO_PORT = 27017;

export const DB_TOKEN = 'db' as const;

export interface DBUsersConfig {
  host: string;
  name: string;
  port: number;
  user: string;
  password: string;
  authBase: string;
}

export interface DBUsersConfigPart {
  [DB_TOKEN]: DBUsersConfig;
}

export const dbUsersConfig = registerAs<DBUsersConfig>(DB_TOKEN, () => {
  const result = Joi.object<DBUsersConfig>({
    host: Joi.string().hostname().required(),
    name: Joi.string().required(),
    port: Joi.number().port().default(DEFAULT_MONGO_PORT),
    user: Joi.string().required(),
    password: Joi.string().required(),
    authBase: Joi.string().required(),
  }).validate({
    host: process.env.MONGO_HOST,
    name: process.env.MONGO_DB,
    port: parseInt(process.env.MONGO_PORT || `${DEFAULT_MONGO_PORT}`, 10),
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    authBase: process.env.MONGO_AUTH_BASE,
  }, { abortEarly: true });

  if (result.error) {
    throw new Error(`[DB Users Validation Error]: ${result.error.message}`)
  }
  return result.value;
});
