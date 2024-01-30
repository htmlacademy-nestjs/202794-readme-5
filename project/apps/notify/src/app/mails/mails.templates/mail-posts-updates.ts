import { ISendMailOptions } from "@nestjs-modules/mailer";

export class MailPostsUpdates implements ISendMailOptions {
  public template: string = './templates/email-posts-updates';

  public subject: string = 'Новые публикации';

  constructor(options: ISendMailOptions) {
    Object.assign(this, options);
  }
}
