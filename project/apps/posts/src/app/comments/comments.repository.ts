import { NotFoundException } from '@nestjs/common';
import { PostgresRepository } from '@project/libs/shared/core';
import { ICommentsFilters, getCommentsFilters } from './comments.filters';
import { CreateCommentDto } from './comments.dto/create-comment.dto';
import { UpdateCommentDto } from './comments.dto/update-comment.dto';
import { CommentsErrorMessage } from './comments.const';
import { Comment } from './comment.entity';

export class CommentsRepository extends PostgresRepository<Comment> {
  public async findAll(filters?: ICommentsFilters): Promise<Comment[]> {
    const { take, skip, where, orderBy } = getCommentsFilters(filters);

    return this.client.comment.findMany({
      take, skip, where, orderBy,
    });
  }

  public async findOne(id: string): Promise<Comment> {
    return this.client.comment.findUnique({ where: { id } });
  }

  public async create(data: CreateCommentDto): Promise<Comment> {
    const post = await this.client.post.findFirst({
      where: { id: data.postId },
    });

    if (!post) {
      throw new NotFoundException(CommentsErrorMessage.PostNotFound);
    }
    return this.client.comment.create({
      data: {
        author: {
          connectOrCreate: {
            where: { id: data.authorId },
            create: { id: data.authorId }
        } },
        post: { connect: { id: data.postId } },
        message: data.message,
      },
    });
  }

  public async update(id: string, data: UpdateCommentDto): Promise<Comment> {
    return this.client.comment.update({ where: { id },
      data: { message: data.message },
    });
  }

  public async remove(id: string): Promise<Comment> {
    return this.client.comment.delete({ where: { id } });
  }
}
