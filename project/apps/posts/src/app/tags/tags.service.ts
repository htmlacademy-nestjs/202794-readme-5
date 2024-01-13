import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './tags.dto/create-tag.dto';
import { TagsRepository } from './tags.repository';
import { ITagsFilters } from './tags.filters';
import { RemoveTagDto } from './tags.dto/remove-tag.dto';

@Injectable()
export class TagsService {
  constructor(
    private readonly tagsRepository: TagsRepository,
  ) {}

  public async findAll(filter?: ITagsFilters) {
    return this.tagsRepository.findAll(filter);
  }

  public async findOne(id: string) {
    return this.tagsRepository.findOne(id);
  }

  public async create(dto: CreateTagDto) {
    const text = dto.text.toLowerCase();
    const [tag] = await this.findAll({ text });

    if (tag) {
      return tag;
    }
    return this.tagsRepository.create({ text });
  }

  public async remove(id: string) {
    return this.tagsRepository.remove(id);
  }

  public async removeByText(dto: RemoveTagDto) {
    const text = dto.text.toLowerCase();
    return this.tagsRepository.removeByText({ text });
  }
}
