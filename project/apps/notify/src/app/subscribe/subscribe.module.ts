import { Module } from '@nestjs/common';
import { RabbitModule } from '@project/libs/config/rabbit';
import { SubscribeController } from './subscribe.controller';
import { MailsModule } from '../mails/mails.module';
import { SubscribersModule } from '../subscribers/subscribers.module';

@Module({
  imports: [
    MailsModule,
    RabbitModule,
    SubscribersModule,
  ],
  controllers: [SubscribeController],
})
export class SubscribeModule {}
