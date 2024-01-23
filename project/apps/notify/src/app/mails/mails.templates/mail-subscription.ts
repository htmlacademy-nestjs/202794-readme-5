import { ISendMailOptions } from "@nestjs-modules/mailer";

export class MailSubscription implements ISendMailOptions {
  public template: string = './templates/email-subscription';

  public subject: string = 'Подписка на уведомление';

  constructor(options: ISendMailOptions) {
    Object.assign(this, options);
  }
}
