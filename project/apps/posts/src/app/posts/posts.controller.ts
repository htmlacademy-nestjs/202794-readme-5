import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query, HttpCode } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { transform } from '@project/libs/shared/helpers';
import { PostType } from '@project/libs/shared/types';
import { PostsService } from './posts.service';
import { CreateVideoPostDto } from './posts.dto/create-video-post.dto';
import { CreateTextPostDto } from './posts.dto/create-text-post.dto';
import { CreateQuotePostDto } from './posts.dto/create-quote-post.dto';
import { CreatePhotoPostDto } from './posts.dto/create-photo-post.dto';
import { CreateLinkPostDto } from './posts.dto/create-link-post.dto';
import { UpdatePostDto } from './posts.dto/update-post.dto';
import { PostRdo } from './posts.rdo/post.rdo';
import { PostsApiDesc } from './posts.const';
import { PostsView } from './posts.types';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: PostsApiDesc.GetAll,
  })
  @Get()
  public async findAll(
    @Query('offset') offset?: number,
    @Query('limit') limit?: number,
  ) {
    const posts = await this.postsService.findAll({ offset, limit });
    const count = posts.length;
console.log('posts', posts);
    return { count, items: transform(PostRdo, posts) };
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PostsApiDesc.GetOne,
  })
  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return transform(PostRdo, await this.postsService.findOne(id));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PostsApiDesc.GetOne,
  })
  @Get(':id/details')
  public async findOneDetailed(@Param('id') id: string) {
    return transform(PostRdo, await this.postsService.findOne(id), [PostsView.Details]);
  }

  @ApiResponse({
    type: CreateVideoPostDto,
    status: HttpStatus.OK,
    description: PostsApiDesc.CreateVideoPost,
  })
  @Post(PostType.Video)
  public async createVideoPost(@Body() dto: CreateVideoPostDto) {
    const post = await this.postsService.create(dto);
    return transform(PostRdo, post);
  }

  @ApiResponse({
    type: CreateTextPostDto,
    status: HttpStatus.OK,
    description: PostsApiDesc.CreateTextPost,
  })
  @Post(PostType.Text)
  public async createTextPost(@Body() dto: CreateTextPostDto) {
    const post = await this.postsService.create(dto);
    return transform(PostRdo, post);
  }

  @ApiResponse({
    type: CreateQuotePostDto,
    status: HttpStatus.OK,
    description: PostsApiDesc.CreateQuotePost,
  })
  @Post(PostType.Quote)
  public async createQuotePost(@Body() dto: CreateQuotePostDto) {
    const post = await this.postsService.create(dto);
    return transform(PostRdo, post);
  }

  @ApiResponse({
    type: CreatePhotoPostDto,
    status: HttpStatus.OK,
    description: PostsApiDesc.CreatePhotoPost,
  })
  @Post(PostType.Photo)
  public async createPhotoPost(@Body() dto: CreatePhotoPostDto) {
    const post = await this.postsService.create(dto);
    return transform(PostRdo, post);
  }

  @ApiResponse({
    type: CreateLinkPostDto,
    status: HttpStatus.OK,
    description: PostsApiDesc.CreateLinkPost,
  })
  @Post(PostType.Link)
  public async createLinkPost(@Body() dto: CreateLinkPostDto) {
    const post = await this.postsService.create(dto);
    return transform(PostRdo, post);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PostsApiDesc.Repost,
  })
  @Post(':id/repost')
  public async repost(@Param('id') id: string) {
    return transform(PostRdo, await this.postsService.repost(id));
  }

  @ApiResponse({
    type: UpdatePostDto,
    status: HttpStatus.OK,
    description: PostsApiDesc.Update,
  })
  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UpdatePostDto,
  ) {
    return transform(PostRdo, await this.postsService.update(id, dto));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PostsApiDesc.Remove,
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async remove(@Param('id') id: string) {
    return transform(PostRdo, await this.postsService.remove(id));
  }
}
