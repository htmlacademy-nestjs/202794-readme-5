import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { mongoConfig } from '@project/libs/config/mongo';
import { rabbitConfig } from '@project/libs/config/rabbit';
import { appNotifyConfig } from './app-notify.config';
import { mailNotifyConfig } from './mail-notify.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [
        appNotifyConfig,
        mailNotifyConfig,
        mongoConfig,
        rabbitConfig,
      ],
      envFilePath: 'apps/notify/notify.env',
    })
  ],
})
export class ConfigNotifyModule {}
