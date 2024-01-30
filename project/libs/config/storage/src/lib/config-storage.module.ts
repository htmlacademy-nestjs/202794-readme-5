import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { mongoConfig } from '@project/libs/config/mongo';
import { appStorageConfig } from './app-storage.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [
        appStorageConfig,
        mongoConfig,
      ],
      envFilePath: 'apps/storage/storage.env',
    })
  ],
})
export class ConfigStorageModule {}
