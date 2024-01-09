import { PostgresRepository } from '@project/libs/shared/core';
import { ICreateLike, Like, LikeId } from './like.entity';
import { ILikesFilter } from './likes.types';

export class LikesRepository extends PostgresRepository<Like, LikeId> {
  public async findAll(filter?: ILikesFilter): Promise<Like[]> {
    return this.client.like.findMany({
      include: { author: true },
      where: filter ? { postId: filter.postId } : undefined
    });
  }

  public async findOne(id: LikeId): Promise<Like> {
    return this.client.like.findUnique({
      include: { author: true },
      where: { authorId_postId: id },
    });
  }

  public async create(data: ICreateLike) {
    const author = { connectOrCreate: {
      where: { id: data.authorId },
      create: { id: data.authorId },
    } }
    const post = { connect: { id: data.postId } };

    return this.client.like.create({
      include: { author: true },
      data: { author, post },
    });
  }

  public async remove(id: LikeId): Promise<Like> {
    return this.client.like.delete({
      include: { author: true },
      where: { authorId_postId: id },
    });
  }
}
