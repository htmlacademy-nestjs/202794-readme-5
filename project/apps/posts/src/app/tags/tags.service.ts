import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTagDto } from './tags.dto/create-tag.dto';
import { TagsRepository } from './tags.repository';
import { TagsErrorMessage } from './tags.const';
import { ITagsFilter } from './tags.types';

@Injectable()
export class TagsService {
  constructor(
    private readonly tagsRepository: TagsRepository,
  ) {}

  public async findAll(filter?: ITagsFilter) {
    return this.tagsRepository.findAll(filter);
  }

  public async findOne(id: string) {
    return this.tagsRepository.findOne(id);
  }

  public async findOneOrThrow(id: string) {
    const tag = await this.findOne(id);
    if (tag) return tag;
    throw new NotFoundException(TagsErrorMessage.TagNotFound);
  }

  public async create(dto: CreateTagDto) {
    const tags = await this.findAll(dto);
    if (tags?.length) return tags[0];
    return this.tagsRepository.create(dto);
  }

  public async remove(id: string) {
    await this.findOneOrThrow(id);
    return this.tagsRepository.remove(id);
  }
}
