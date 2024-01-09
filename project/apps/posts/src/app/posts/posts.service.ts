import { Injectable, NotFoundException } from '@nestjs/common';
import { USER1_ID } from '@project/libs/posts/prisma';
import { CreatePostDto } from './posts.dto/create-post.dto';
import { UpdatePostDto } from './posts.dto/update-post.dto';
import { PostsRepository } from './posts.repository';
import { PostsErrorMessage } from './posts.const';
import { IPostsFilter } from './posts.types';

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

  public async findAll(filter: IPostsFilter) {
    return this.postsRepository.findAll(filter);
  }

  public async findOne(id: string) {
    return this.findOneOrThrow(id);
  }

  public async create(dto: CreatePostDto) {
    return this.postsRepository.create({
      postType: dto.type,
      authorId: USER1_ID, // TODO: Подставлять id текущего пользователя
      payload: dto,
    });
  }

  public async repost(id: string) {
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
