import { Injectable } from '@nestjs/common';
import { IRepository } from '@project/libs/shared/core'
import { PrismaClientService } from '@project/libs/shared/prisma';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsRepository implements IRepository<Comment> {
  constructor(
    protected readonly client: PrismaClientService,
  ) {}

  public async findAll(): Promise<Comment[]> {
    throw new Error('Method not implemented.');
  }

  public async findOne(id: string): Promise<Comment> {
    throw new Error('Method not implemented.');
  }

  public async create(data: Partial<Comment>): Promise<Comment> {
    throw new Error('Method not implemented.');
  }

  public async update(id: string, data: Partial<Comment>): Promise<Comment> {
    throw new Error('Method not implemented.');
  }

  public async remove(id: string): Promise<Comment> {
    throw new Error('Method not implemented.');
  }
}
