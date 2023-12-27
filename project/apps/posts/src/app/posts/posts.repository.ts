import { Injectable } from '@nestjs/common';
import { IRepository } from '@project/libs/shared/core'
import { PrismaClientService } from '@project/libs/shared/prisma';
import { Post } from './post.entity';

@Injectable()
export class PostsRepository implements IRepository<Post> {
  constructor(
    protected readonly client: PrismaClientService,
  ) {}

  public async findAll(): Promise<Post[]> {
    return this.client.post.findMany();
  }

  public async findOne(id: string): Promise<Post> {
    return this.client.post.findUnique({ where: { id } });
  }

  public async create(data: Partial<Post>): Promise<Post> {
    return this.client.post.create({
      data: {
        postType: data.postType,
        authorId: data.authorId,
        title: data.title,
      },
    });
  }

  public async update(id: string, data: Partial<Post>): Promise<Post> {
    return this.client.post.update({
      where: { id },
      data: {
        postType: data.postType,
        authorId: data.authorId,
        title: data.title,
      },
    });
  }

  public async remove(id: string): Promise<Post> {
    return this.client.post.delete({ where: { id } });
  }
}
