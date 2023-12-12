import { Injectable } from '@nestjs/common';
import { MemoryRepository } from '@project/libs/shared/core'
import { Post } from './post.entity';

@Injectable()
export class PostsRepository extends MemoryRepository<Post> {}
