import { PostgresRepository } from '@project/libs/shared/core';
import { PostStatus } from '@project/libs/shared/types';
import { CreateLikeDto } from './likes.dto/create-like.dto';
import { ILikesFilters } from './likes.filters';
import { Like, LikeId } from './like.entity';
import { NotFoundException } from '@nestjs/common';
import { LikesErrorMessage } from './likes.const';

export class LikesRepository extends PostgresRepository<Like, LikeId> {
  public async findAll(filters?: ILikesFilters): Promise<Like[]> {
    return this.client.like.findMany({
      where: {
        authorId: filters?.authorId,
        postId: filters?.postId,
      },
    });
  }

  public async findOne(id: LikeId): Promise<Like> {
    return this.client.like.findUnique({
      where: { authorId_postId: id },
    });
  }

  public async create(data: CreateLikeDto): Promise<Like> {
    const existedLike = await this.findOne(data);

    if (existedLike) {
      return existedLike;
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
