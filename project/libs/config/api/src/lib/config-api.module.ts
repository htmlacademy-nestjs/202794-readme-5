import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appApiConfig } from './app-api.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [
        appApiConfig,
      ],
      envFilePath: 'apps/api/api.env',
    })
  ],
})
export class ConfigApiModule {}
