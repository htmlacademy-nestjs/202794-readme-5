import { Module } from '@nestjs/common';
import { PublishModule } from '@project/libs/notify/publish';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsRepository } from './posts.repository';

@Module({
  imports: [PublishModule],
  controllers: [PostsController],
  providers: [PostsRepository, PostsService],
  exports: [PostsRepository, PostsService],
})
export class PostsModule {}
