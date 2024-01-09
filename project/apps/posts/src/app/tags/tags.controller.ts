import { Controller, Get, Post, Body, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { transform } from '@project/libs/shared/helpers';
import { TagsService } from './tags.service';
import { CreateTagDto } from './tags.dto/create-tag.dto';
import { TagRdo } from './tags.rdo/tags.rdo';
import { TagsApiDesc } from './tags.const';

@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(
    private readonly tagsService: TagsService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: TagsApiDesc.GetAll,
  })
  @Get()
  public async findAll(@Query('text') text?: string) {
    const tags = await this.tagsService.findAll({ text });
    return { count: tags.length, items: transform(TagRdo, tags) };
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: TagsApiDesc.GetOne,
  })
  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return transform(TagRdo, await this.tagsService.findOneOrThrow(id));
  }

  @ApiResponse({
    type: CreateTagDto,
    status: HttpStatus.OK,
    description: TagsApiDesc.Create,
  })
  @Post()
  public async create(@Body() dto: CreateTagDto) {
    return transform(TagRdo, await this.tagsService.create(dto));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: TagsApiDesc.Remove,
  })
  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return transform(TagRdo, await this.tagsService.remove(id));
  }
}
