import { Injectable } from '@nestjs/common';
import { IPagination } from '@project/libs/shared/types';
import { PostgresRepository } from '@project/libs/shared/core';
import { PrismaClientService } from '@project/libs/shared/prisma';
import { Author } from './author.entity';

@Injectable()
export class AuthorsRepository extends PostgresRepository<Author> {
  public constructor(
    protected readonly client: PrismaClientService
  ) {
    super(client, Author)
  }

  public async findAll(): Promise<IPagination<Author>> {
    const [items, count] = await this.client.$transaction([
      this.client.author.findMany({
        include: { _count: { select: {
          authorsPosts: true,
          authorsLikes: true,
          authorsComments: true,
        } } }
      }),
      this.client.author.count(),
    ]);
    return { items, count };
  }

  public async findOne(id: string): Promise<Author> {
    return this.client.author.findUnique({
      where: { id },
      include: { _count: { select: {
        authorsPosts: true,
        authorsLikes: true,
        authorsComments: true,
      } } }
    });
  }

  public async remove(id: string): Promise<Author> {
    return this.client.author.delete({
      where: { id },
      include: { _count: { select: {
        authorsPosts: true,
        authorsLikes: true,
        authorsComments: true,
      } } }
    });
  }
}
