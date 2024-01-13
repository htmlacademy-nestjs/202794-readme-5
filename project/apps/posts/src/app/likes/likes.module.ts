import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesRepository } from './likes.repository';
import { LikesController } from './likes.controller';

@Module({
  controllers: [LikesController],
  providers: [LikesRepository, LikesService],
  exports: [LikesRepository, LikesService],
})
export class LikesModule {}
