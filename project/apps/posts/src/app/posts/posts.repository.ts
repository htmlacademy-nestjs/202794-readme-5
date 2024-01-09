import { PostStatus, Prisma } from '@prisma/client';
import { PostgresRepository } from '@project/libs/shared/core';
import { Post } from './post.entity';
import { IPostsFilter } from './posts.types';
import { MAX_POSTS_LIMIT } from './posts.const';

export class PostsRepository extends PostgresRepository<Post> {
  public async findAll(filter?: IPostsFilter): Promise<Post[]> {
    return this.client.post.findMany({
      include: {
        _count: { select: { comments: true, likes: true } },
        author: true,
        owner: true,
        tags: true,
      },
      take: filter?.limit > 0 ? filter.limit : MAX_POSTS_LIMIT,
      skip: filter?.offset > 0 ? filter.offset : 0,
      where: { postStatus: PostStatus.PUBLISHED },
      orderBy: { publishAt: 'desc' },
    });
  }

  public async findOne(id: string): Promise<Post> {
    return this.client.post.findUnique({ where: { id } });
  }

  public async create(data: Partial<Post>): Promise<Post> {
    const author = { id: data.authorId };

    return this.client.post.create({
      data: {
        author: { connectOrCreate: { where: author, create: author } },
        postType: data.postType,
        payload: data.payload as Prisma.InputJsonValue,
      },
    });
  }

  public async update(id: string, data: Partial<Post>): Promise<Post> {
    return this.client.post.update({
      where: { id },
      data: { payload: data.payload as Prisma.JsonObject },
    });
  }

  public async remove(id: string): Promise<Post> {
    return this.client.post.delete({ where: { id } });
  }
}
