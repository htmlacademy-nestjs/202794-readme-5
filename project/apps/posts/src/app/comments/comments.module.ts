import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsRepository } from './comments.repository';
import { CommentsController } from './comments.controller';

@Module({
  controllers: [CommentsController],
  providers: [CommentsRepository, CommentsService],
  exports: [CommentsRepository, CommentsService],
})
export class CommentsModule {}
