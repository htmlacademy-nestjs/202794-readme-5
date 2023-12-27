import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { transform } from '@project/libs/shared/helpers';
import { PostsService } from './posts.service';
import { CreatePostDto } from './posts.dto/create-post.dto';
import { UpdatePostDto } from './posts.dto/update-post.dto';
import { PostRdo } from './posts.rdo/post.rdo';
import { PostsApiDesc } from './posts.const';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService
  ) {}

  @ApiResponse({
    type: CreatePostDto,
    status: HttpStatus.OK,
    description: PostsApiDesc.Create,
  })
  @Post()
  public async create(@Body() dto: CreatePostDto) {
    const post = await this.postsService.create(dto);
    return transform(PostRdo, post);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PostsApiDesc.GetAll,
  })
  @Get()
  public async findAll() {
    const posts = await this.postsService.findAll();
    return { posts: transform(PostRdo, posts) };
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PostsApiDesc.GetOne,
  })
  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const post = await this.postsService.findOne(id);
    return transform(PostRdo, post);
  }

  @ApiResponse({
    type: UpdatePostDto,
    status: HttpStatus.OK,
    description: PostsApiDesc.Update,
  })
  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    const post = await this.postsService.update(id, dto);
    return transform(PostRdo, post);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PostsApiDesc.Remove,
  })
  @Delete(':id')
  public async remove(@Param('id') id: string) {
    const post = await this.postsService.remove(id);
    return transform(PostRdo, post);
  }
}
