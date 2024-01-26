import { Module } from '@nestjs/common';
import { ConfigNotifyModule } from '@project/libs/config/notify';
import { MongoModule } from '@project/libs/config/mongo';
import { SubscribersModule } from './subscribers/subscribers.module';
import { MailsModule } from './mails/mails.module';
import { SubscribeModule } from './subscribe/subscribe.module';

@Module({
  imports: [
    ConfigNotifyModule,
    MailsModule,
    MongoModule,
    SubscribeModule,
    SubscribersModule,
  ],
  providers: [],
})
export class AppModule {}
