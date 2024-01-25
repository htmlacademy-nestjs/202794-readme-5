import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

export const DEFAULT_RABBIT_PORT = 5672;

export const RABBIT_TOKEN = 'rabbit' as const;

export interface RabbitConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  queue: string;
  exchange: string;
}

export interface RabbitConfigPart {
  [RABBIT_TOKEN]: RabbitConfig;
}

export const rabbitConfig = registerAs<RabbitConfig>(RABBIT_TOKEN, () => {
  const result = Joi.object<RabbitConfig>({
    host: Joi.string().hostname().required(),
    port: Joi.number().port().default(DEFAULT_RABBIT_PORT),
    user: Joi.string().required(),
    password: Joi.string().required(),
    queue: Joi.string().required(),
    exchange: Joi.string().required(),
  }).validate({
    host: process.env.RABBIT_HOST,
    port: parseInt(process.env.RABBIT_PORT || `${DEFAULT_RABBIT_PORT}`, 10),
    user: process.env.RABBIT_USERNAME,
    password: process.env.RABBIT_PASSWORD,
    queue: process.env.RABBIT_QUEUE,
    exchange: process.env.RABBIT_EXCHANGE,
  }, { abortEarly: true });

  if (result.error) {
    throw new Error(`[Rabbit Validation Error]: ${result.error.message}`)
  }
  return result.value;
});
