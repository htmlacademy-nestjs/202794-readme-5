import { Prisma } from '@prisma/client';
import { PostgresRepository } from '@project/libs/shared/core';
import { Tag, ICreateTag } from './tag.entity';
import { ITagsFilter } from './tags.types';

export class TagsRepository extends PostgresRepository<Tag> {
  public async findAll(filter?: ITagsFilter): Promise<Tag[]> {
    const where: Prisma.TagWhereInput = filter ? {
      text: { equals: filter.text },
    } : undefined;
    return this.client.tag.findMany({ where });
  }

  public async findOne(id: string): Promise<Tag> {
    return this.client.tag.findUnique({ where: { id } });
  }

  public async create(data: ICreateTag): Promise<Tag> {
    const text = data.text.toLowerCase();
    return this.client.tag.create({ data: { text } });
  }

  public async remove(id: string): Promise<Tag> {
    return this.client.tag.delete({ where: { id } });
  }
}
