import { Module } from '@nestjs/common';
import { ConfigPostsModule } from '@project/libs/config/posts';
import { PrismaClientModule } from '@project/libs/shared/prisma';
import { PublishModule } from '@project/libs/notify/publish';
import { AuthorsModule } from './authors/authors.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { PostsModule } from './posts/posts.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    AuthorsModule,
    CommentsModule,
    ConfigPostsModule,
    LikesModule,
    PostsModule,
    PrismaClientModule,
    PublishModule,
    TagsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
