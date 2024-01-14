import { IPagination } from '@project/libs/shared/types';
import { PostgresRepository } from '@project/libs/shared/core';
import { Author } from './author.entity';

export class AuthorsRepository extends PostgresRepository<Author> {
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
