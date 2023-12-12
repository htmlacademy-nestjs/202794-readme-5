import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsRepository } from './posts.repository';

@Module({
  controllers: [PostsController],
  providers: [PostsRepository, PostsService],
  exports: [PostsRepository, PostsService],
})
export class PostsModule {}
