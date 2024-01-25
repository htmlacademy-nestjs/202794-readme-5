import { Module } from '@nestjs/common';
import { MailNotifyModule } from '@project/libs/config/notify';
import { MailsController } from './mails.controller';
import { MailsService } from './mails.service';

@Module({
  imports: [MailNotifyModule],
  controllers: [MailsController],
  providers: [MailsService],
  exports: [MailsService],
})
export class MailsModule {}
