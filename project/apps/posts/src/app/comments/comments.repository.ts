import { PostgresRepository } from '@project/libs/shared/core';
import { Comment, ICreateComment } from './comment.entity';
import { ICommentsFilter } from './comments.types';

export class CommentsRepository extends PostgresRepository<Comment> {
  public async findAll(filter?: ICommentsFilter): Promise<Comment[]> {
    return this.client.comment.findMany({
      include: { author: true },
      where: { postId: filter.postId },
    });
  }

  public async findOne(id: string): Promise<Comment> {
    return this.client.comment.findUnique({
      include: { author: true },
      where: { id }
    });
  }

  public async create(data: ICreateComment): Promise<Comment> {
    const author = { id: data.authorId };

    return this.client.comment.create({
      include: { author: true },
      data: {
        author: { connectOrCreate: { where: author, create: author } },
        post: { connect: { id: data.postId } },
        message: data.message,
      },
    });
  }

  public async update(id: string, data: Partial<Comment>): Promise<Comment> {
    return this.client.comment.update({
      include: { author: true },
      where: { id },
      data: { message: data.message },
    });
  }

  public async remove(id: string): Promise<Comment> {
    return this.client.comment.delete({
      include: { author: true },
      where: { id },
    });
  }
}
