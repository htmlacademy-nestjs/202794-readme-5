import { Injectable } from '@nestjs/common';
import { MemoryRepository } from '@project/libs/shared/core'
import { Comment } from './comment.entity';

@Injectable()
export class CommentsRepository extends MemoryRepository<Comment> {}
