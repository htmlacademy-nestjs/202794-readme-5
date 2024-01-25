import { ISendMailOptions } from "@nestjs-modules/mailer";

export class MailBlank implements ISendMailOptions {
  public template: string = './templates/email-blank';

  constructor(options: ISendMailOptions) {
    Object.assign(this, options);
  }
}
