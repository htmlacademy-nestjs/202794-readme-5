import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ISubscriber } from '@project/libs/shared/types';
import { SendMailDto } from './mails.dto/send-mail.dto';
import { MailBlank } from './mails.templates/mail-blank';
import { MailSingup } from './mails.templates/mail-singup';
import { MailSubscription } from './mails.templates/mail-subscription';

@Injectable()
export class MailsService {
  constructor(
    private readonly mailerService: MailerService
  ) {}

  public async send(context: SendMailDto) {
    const { to, from, subject } = context;

    return this.mailerService.sendMail(
      new MailBlank({ to, from, subject, context }),
    );
  }

  public async sendUserSubscriptionMail(context: ISubscriber) {
    const { email: to } = context;

    return this.mailerService.sendMail(
      new MailSubscription({ to, context }),
    );
  }

  public async sendUserSingupMail(context: ISubscriber) {
    const { email: to } = context;

    return this.mailerService.sendMail(
      new MailSingup({ to, context }),
    );
  }
}
