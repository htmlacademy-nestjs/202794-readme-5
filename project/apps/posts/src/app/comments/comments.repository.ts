import { Injectable, NotFoundException } from '@nestjs/common';
import { IPagination } from '@project/libs/shared/types';
import { PostgresRepository } from '@project/libs/shared/core';
import { PrismaClientService } from '@project/libs/shared/prisma';
import { ICommentsFilters, getCommentsFilters } from './comments.filters';
import { CreateCommentDto } from './comments.dto/create-comment.dto';
import { UpdateCommentDto } from './comments.dto/update-comment.dto';
import { RemoveCommentDto } from './comments.dto/remove-comment.dto';
import { CommentsErrorMessage } from './comments.const';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsRepository extends PostgresRepository<Comment> {
  public constructor(
    protected readonly client: PrismaClientService
  ) {
    super(client, Comment)
  }

  public async findAll(filters?: ICommentsFilters): Promise<IPagination<Comment>> {
    const { take, skip, where, orderBy } = getCommentsFilters(filters);

    const [items, count] = await this.client.$transaction([
      this.client.comment.findMany({
        take, skip, where, orderBy,
      }),
      this.client.comment.count({ where }),
    ]);

    return {
      count: count,
      items: items,
      limit: filters?.limit,
      offset: filters?.offset,
      page: filters?.page,
      pages: Math.ceil(count / take),
    };
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
    return this.client.comment.update({
      where: { id, authorId: data.authorId, postId: data.postId },
      data: { message: data.message },
    });
  }

  public async remove(id: string, data?: RemoveCommentDto): Promise<Comment> {
    return this.client.comment.delete({
      where: { id, authorId: data.authorId, postId: data.postId },
    });
  }
}
