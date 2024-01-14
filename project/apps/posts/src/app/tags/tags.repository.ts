import { IPagination } from '@project/libs/shared/types';
import { PostgresRepository } from '@project/libs/shared/core';
import { CreateTagDto } from './tags.dto/create-tag.dto';
import { RemoveTagDto } from './tags.dto/remove-tag.dto';
import { ITagsFilters, getTagsFilters } from './tags.filters';
import { Tag } from './tag.entity';

export class TagsRepository extends PostgresRepository<Tag> {
  public async findAll(filter?: ITagsFilters): Promise<IPagination<Tag>> {
    const { where } = getTagsFilters(filter);
    const [items, count] = await this.client.$transaction([
      this.client.tag.findMany({ where }),
      this.client.tag.count({ where }),
    ]);

    return { count, items };
  }

  public async findOne(id: string): Promise<Tag> {
    return this.client.tag.findUnique({ where: { id } });
  }

  public async create(data: CreateTagDto): Promise<Tag> {
    return this.client.tag.create({ data: { text: data.text } });
  }

  public async remove(id: string): Promise<Tag> {
    return this.client.tag.delete({ where: { id } });
  }

  public async removeByText(data: RemoveTagDto): Promise<Tag> {
    return this.client.tag.delete({ where: { text: data.text } });
  }
}
