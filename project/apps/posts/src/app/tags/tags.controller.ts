import { Controller, Get, Post, Body, Param, Delete, HttpStatus, Query, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagsService } from './tags.service';
import { CreateTagDto } from './tags.dto/create-tag.dto';
import { RemoveTagDto } from './tags.dto/remove-tag.dto';
import { TagNotFoundInterceptor, TagTransformInterceptor, TagsTransformInterceptor } from './tags.interceptors';
import { TagsApiDesc } from './tags.const';
import { UUIDValidationPipe } from '@project/libs/shared/helpers';

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
  @UseInterceptors(TagsTransformInterceptor)
  public async findAll(@Query('text') text?: string) {
    return this.tagsService.findAll({ text });
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: TagsApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(TagTransformInterceptor, TagNotFoundInterceptor)
  public async findOne(@Param('id', UUIDValidationPipe) id: string) {
    return this.tagsService.findOne(id);
  }

  @ApiResponse({
    type: CreateTagDto,
    status: HttpStatus.OK,
    description: TagsApiDesc.Create,
  })
  @Post()
  @UseInterceptors(TagTransformInterceptor)
  public async create(@Body() dto: CreateTagDto) {
    return this.tagsService.create(dto);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: TagsApiDesc.Remove,
  })
  @Delete(':id')
  @UseInterceptors(TagTransformInterceptor, TagNotFoundInterceptor)
  public async remove(@Param('id', UUIDValidationPipe) id: string) {
    return this.tagsService.remove(id);
  }

  @ApiResponse({
    type: RemoveTagDto,
    status: HttpStatus.OK,
    description: TagsApiDesc.Remove,
  })
  @Delete()
  @UseInterceptors(TagTransformInterceptor, TagNotFoundInterceptor)
  public async removeByText(@Body() dto: RemoveTagDto) {
    return this.tagsService.removeByText(dto);
  }
}
