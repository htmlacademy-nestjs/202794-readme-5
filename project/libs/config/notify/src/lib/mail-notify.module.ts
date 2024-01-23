import * as path from 'node:path';
import { ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailNotifyConfigPart } from './mail-notify.config';

export const MailNotifyModule = MailerModule.forRootAsync({
  useFactory: async (config: ConfigService<MailNotifyConfigPart>) => {
    return {
      transport: {
        host: config.get('mail.host', { infer: true }),
        port: config.get('mail.port', { infer: true }),
        secure: false,
        auth: {
          user: config.get('mail.user', { infer: true }),
          pass: config.get('mail.password', { infer: true }),
        }
      },
      defaults: {
        from: config.get('mail.from', { infer: true }),
      },
      template: {
        dir: path.resolve(__dirname, 'assets'),
        adapter: new HandlebarsAdapter(),
        options: { strict: true },
      }
    };
  },
  inject: [ConfigService],
});
