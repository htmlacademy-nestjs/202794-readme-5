import { Controller, Get, Post, Body, Param, Delete, Query, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UUIDValidationPipe } from '@project/libs/shared/helpers';
import { TagNotFound, TagTransform, TagsTransform } from './tags.interceptors';
import { TagsService } from './tags.service';
import { CreateTagDto } from './tags.dto/create-tag.dto';
import { RemoveTagDto } from './tags.dto/remove-tag.dto';
import { TagsRdo } from './tags.rdo/tags.rdo';
import { TagRdo } from './tags.rdo/tag.rdo';
import { TagsApiDesc } from './tags.const';

@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(
    private readonly tagsService: TagsService
  ) {}

  @ApiOkResponse({
    type: TagsRdo,
    description: TagsApiDesc.GetAll,
  })
  @Get()
  @UseInterceptors(TagsTransform)
  public async findAll(@Query('text') text?: string) {
    return this.tagsService.findAll({ text });
  }

  @ApiOkResponse({
    type: TagRdo,
    description: TagsApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(TagTransform, TagNotFound)
  public async findOne(@Param('id', UUIDValidationPipe) id: string) {
    return this.tagsService.findOne(id);
  }

  @ApiOkResponse({
    type: TagRdo,
    description: TagsApiDesc.Create,
  })
  @Post()
  @UseInterceptors(TagTransform)
  public async create(@Body() dto: CreateTagDto) {
    return this.tagsService.create(dto);
  }

  @ApiOkResponse({
    type: TagRdo,
    description: TagsApiDesc.Remove,
  })
  @Delete(':id')
  @UseInterceptors(TagTransform, TagNotFound)
  public async remove(@Param('id', UUIDValidationPipe) id: string) {
    return this.tagsService.remove(id);
  }

  @ApiOkResponse({
    type: TagRdo,
    description: TagsApiDesc.Remove,
  })
  @Delete()
  @UseInterceptors(TagTransform, TagNotFound)
  public async removeByText(@Body() dto: RemoveTagDto) {
    return this.tagsService.removeByText(dto);
  }
}
