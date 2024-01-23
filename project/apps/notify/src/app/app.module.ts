import { Module } from '@nestjs/common';
import { ConfigNotifyModule, MongoNotifyModule } from '@project/libs/config/notify';
import { SubscribersModule } from './subscribers/subscribers.module';
import { MailsModule } from './mails/mails.module';
import { SubscribeModule } from './subscribe/subscribe.module';

@Module({
  imports: [
    ConfigNotifyModule,
    MailsModule,
    MongoNotifyModule,
    SubscribeModule,
    SubscribersModule,
  ],
  providers: [],
})
export class AppModule {}
