import { Module } from '@nestjs/common';
import { ConfigApiModule, HttpApiModule } from '@project/libs/config/api';
import { PostsController } from './posts.controller';
import { UsersController } from './users.controller';
import { AuthGuard } from './app.guards/auth.guard';

@Module({
  imports: [ConfigApiModule, HttpApiModule],
  controllers: [PostsController, UsersController],
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class AppModule {}
