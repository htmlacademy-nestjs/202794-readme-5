import { Injectable, NotFoundException } from '@nestjs/common';
import { IPost, PostStatus } from '@project/libs/shared/types';
import { CreatePostDto } from './posts.dto/create-post.dto';
import { UpdatePostDto } from './posts.dto/update-post.dto';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(
    private readonly postsRepository: PostsRepository
  ) {}

  public async create(dto: CreatePostDto) {
    const post: IPost = {
      postType: dto.postType,
      postStatus: PostStatus.Draft,
      dateOfCreation: new Date(),
      authorId: dto.authorId,
    };
    return this.postsRepository.create(post);
  }

  public async findAll() {
    return this.postsRepository.findAll();
  }

  public async findOne(id: string) {
    const user = await this.postsRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('Post with id not found');
    }
    return user;
  }

  public async update(id: string, dto: UpdatePostDto) {
    if (!await this.postsRepository.contains(id)) {
      throw new NotFoundException('Post with id not found');
    }
    return this.postsRepository.update(id, dto);
  }

  public async remove(id: string) {
    if (!await this.postsRepository.contains(id)) {
      throw new NotFoundException('Post with id not found');
    }
    return this.postsRepository.remove(id);
  }
}
