import { Module } from '@nestjs/common';
import { ConfigStorageModule, StaticsStorageModule } from '@project/libs/config/storage';
import { MongoModule } from '@project/libs/config/mongo';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigStorageModule,
    StaticsStorageModule,
    FilesModule,
    MongoModule,
  ],
  providers: [],
})
export class AppModule {}
