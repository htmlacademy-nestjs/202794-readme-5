import { Module } from '@nestjs/common';
import { ConfigApiModule, HttpApiModule } from '@project/libs/config/api';
import { StorageModule } from '../storage/storage.module';
import { UsersModule } from '../users/users.module';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [
    ConfigApiModule,
    HttpApiModule,
    StorageModule,
    UsersModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
