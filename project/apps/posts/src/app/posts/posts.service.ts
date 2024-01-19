import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from './posts.dto/update-post.dto';
import { CreatePostDto } from './posts.dto/create-post.dto';
import { RepostPostDto } from './posts.dto/repost-post.dto';
import { PostsRepository } from './posts.repository';
import { IPostsFilters } from './posts.filters';

@Injectable()
export class PostsService {
  constructor(
    private readonly postsRepository: PostsRepository
  ) {}

  public async findAll(filter: IPostsFilters) {
    return this.postsRepository.findAll(filter);
  }

  public async findOne(id: string) {
    return this.postsRepository.findOne(id);
  }

  public async create(dto: CreatePostDto) {
    return this.postsRepository.create(dto);
  }

  public async repost(dto: RepostPostDto) {
    return this.postsRepository.repost(dto);
  }

  public async update(id: string, dto: UpdatePostDto) {
    return this.postsRepository.update(id, dto);
  }

  public async remove(id: string) {
    return this.postsRepository.remove(id);
  }
}
