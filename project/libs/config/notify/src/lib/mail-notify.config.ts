import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

export const DEFAULT_SMTP_PORT = 25;

export const MAIL_TOKEN = 'mail' as const;

export interface MailNotifyConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  from: string;
}

export interface MailNotifyConfigPart {
  [MAIL_TOKEN]: MailNotifyConfig;
}

export const mailNotifyConfig = registerAs<MailNotifyConfig>(MAIL_TOKEN, () => {
  const result = Joi.object<MailNotifyConfig>({
    host: Joi.string().hostname().required(),
    port: Joi.number().port().default(DEFAULT_SMTP_PORT),
    user: Joi.string().required(),
    password: Joi.string().required(),
    from: Joi.string().required(),
  }).validate({
    host: process.env.MAIL_SMTP_HOST,
    port: parseInt(process.env.MAIL_SMTP_PORT || `${DEFAULT_SMTP_PORT}`, 10),
    user: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
    from: process.env.MAIL_FROM,
  }, { abortEarly: true });

  if (result.error) {
    throw new Error(`[Mail Notify Validation Error]: ${result.error.message}`)
  }
  return result.value;
});
