import { Injectable, NotFoundException } from '@nestjs/common';
import { IPost, PostStatus } from '@project/libs/shared/types';
import { CreatePostDto } from './posts.dto/create-post.dto';
import { UpdatePostDto } from './posts.dto/update-post.dto';
import { PostsRepository } from './posts.repository';
import { PostsErrorMessage } from './posts.const';

@Injectable()
export class PostsService {
  constructor(
    private readonly postsRepository: PostsRepository
  ) {}

  protected async findOneOrThrow(id: string) {
    const post = await this.postsRepository.findOne(id);
    if (!post) throw new NotFoundException(PostsErrorMessage.PostIdNotFound);
    return post;
  }

  public async create(dto: CreatePostDto) {
    const post: Partial<IPost> = {
      postType: dto.postType,
      postStatus: PostStatus.Draft,
      authorId: dto.authorId,
      title: dto.title,
    };
    return this.postsRepository.create(post);
  }

  public async findAll() {
    return this.postsRepository.findAll();
  }

  public async findOne(id: string) {
    return this.findOneOrThrow(id);
  }

  public async update(id: string, dto: UpdatePostDto) {
    await this.findOneOrThrow(id);
    return this.postsRepository.update(id, dto);
  }

  public async remove(id: string) {
    await this.findOneOrThrow(id);
    return this.postsRepository.remove(id);
  }
}
