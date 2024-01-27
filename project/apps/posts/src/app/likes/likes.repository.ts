import { Injectable, NotFoundException } from '@nestjs/common';
import { PostgresRepository } from '@project/libs/shared/core';
import { IPagination, PostStatus } from '@project/libs/shared/types';
import { PrismaClientService } from '@project/libs/shared/prisma';
import { CreateLikeDto } from './likes.dto/create-like.dto';
import { ILikesFilters, getLikesFilters } from './likes.filters';
import { Like, LikeId } from './like.entity';
import { LikesErrorMessage } from './likes.const';

@Injectable()
export class LikesRepository extends PostgresRepository<Like, LikeId> {
  public constructor(
    protected readonly client: PrismaClientService
  ) {
    super(client, Like)
  }

  public async findAll(filters?: ILikesFilters): Promise<IPagination<Like>> {
    const { where } = getLikesFilters(filters);
    const [items, count] = await this.client.$transaction([
      this.client.like.findMany({ where }),
      this.client.like.count({ where }),
    ]);

    return { count, items };
  }

  public async findOne(id: LikeId): Promise<Like> {
    return this.client.like.findUnique({
      where: { authorId_postId: id },
    });
  }

  public async create(data: CreateLikeDto): Promise<Like> {
    const like = await this.findOne(data);

    if (like) { // К данной публикации уже поставлен лайк
      return like;
    }
    const post = await this.client.post.findFirst({
      where: { id: data.postId, postStatus: PostStatus.Published },
    });

    if (!post) {
      throw new NotFoundException(LikesErrorMessage.PostNotFound);
    }
    return this.client.like.create({
      data: {
        author: { connectOrCreate: {
          where: { id: data.authorId },
          create: { id: data.authorId },
        } },
        post: { connect: { id: data.postId } },
      },
    });
  }

  public async remove(id: LikeId): Promise<Like> {
    return this.client.like.delete({
      where: { authorId_postId: id },
    });
  }
}
