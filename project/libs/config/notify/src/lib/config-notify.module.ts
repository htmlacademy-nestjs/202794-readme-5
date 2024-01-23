import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { rabbitConfig } from '@project/libs/config/rabbit';
import { appNotifyConfig } from './app-notify.config';
import { dbNotifyConfig } from './db-notify.config';
import { mailNotifyConfig } from './mail-notify.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [
        appNotifyConfig,
        dbNotifyConfig,
        mailNotifyConfig,
        rabbitConfig,
      ],
      envFilePath: 'apps/notify/notify.env',
    })
  ],
})
export class ConfigNotifyModule {}
