import { Module } from '@nestjs/common';
import { ConfigApiModule, HttpApiModule } from '@project/libs/config/api';
import { StorageModule } from '../storage/storage.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    ConfigApiModule,
    HttpApiModule,
    StorageModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
