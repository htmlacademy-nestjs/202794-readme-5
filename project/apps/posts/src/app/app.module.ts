import { Module } from '@nestjs/common';
import { PrismaClientModule } from '@project/libs/shared/prisma';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    PostsModule,
    CommentsModule,
    PrismaClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
