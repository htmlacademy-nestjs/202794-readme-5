import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { ConfigApiModule, HttpApiModule } from '@project/libs/config/api';

@Module({
  imports: [
    ConfigApiModule,
    HttpApiModule,
  ],
  controllers: [],
  providers: [StorageService],
  exports: [StorageService],
})
export class StorageModule {}
