import { ISendMailOptions } from "@nestjs-modules/mailer";

export class MailSingup implements ISendMailOptions {
  public template: string = './templates/email-singup';

  public subject: string = 'Регистрация в сервисе readme';

  constructor(options: ISendMailOptions) {
    Object.assign(this, options);
  }
}
