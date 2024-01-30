import { Module } from '@nestjs/common';
import { ConfigApiModule, HttpApiModule } from '@project/libs/config/api';
import { UsersModule } from './users/users.module';
import { AuthGuard } from './guards/auth.guard';
import { PostsModule } from './posts/posts.module';
import { StorageModule } from './storage/storage.module';
import { UsersService } from './users/users.service';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [
    ConfigApiModule,
    HttpApiModule,
    PostsModule,
    StorageModule,
    UsersModule,
  ],
  controllers: [],
  providers: [AuthGuard, UsersService, PostsService],
  exports: [AuthGuard, UsersService, PostsService],
})
export class AppModule {}
