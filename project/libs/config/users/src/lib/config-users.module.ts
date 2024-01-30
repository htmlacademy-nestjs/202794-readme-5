import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { mongoConfig } from '@project/libs/config/mongo';
import { rabbitConfig } from '@project/libs/config/rabbit';
import { appUsersConfig } from './app-users.config';
import { jwtUsersConfig } from './jwt-users.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [
        appUsersConfig,
        jwtUsersConfig,
        mongoConfig,
        rabbitConfig,
      ],
      envFilePath: 'apps/users/users.env',
    })
  ],
})
export class ConfigUsersModule {}
