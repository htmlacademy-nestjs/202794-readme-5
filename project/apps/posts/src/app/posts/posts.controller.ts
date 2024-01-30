import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UUIDValidationPipe } from '@project/libs/shared/helpers';
import { PostTransform, PostNotFound, DetailedPostTransform, PostsTransform } from './posts.interceptors';
import { CreatePostDto } from './posts.dto/create-post.dto';
import { UpdatePostDto } from './posts.dto/update-post.dto';
import { RepostPostDto } from './posts.dto/repost-post.dto';
import { RemovePostDto } from './posts.dto/remove-post.dto';
import { PostRdo, PostDetailedRdo } from './posts.rdo/post.rdo';
import { PostsRdo } from './posts.rdo/posts.rdo';
import { PostsService } from './posts.service';
import { PostsApiDesc } from './posts.const';
import { PostsQuery } from './posts.query';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
  ) {}

  @ApiOkResponse({
    type: PostsRdo,
    description: PostsApiDesc.GetAll,
  })
  @Get()
  @UseInterceptors(PostsTransform)
  public async findAll(@Query() query: PostsQuery) {
    return this.postsService.findAll(query);
  }

  @ApiOkResponse({
    type: PostRdo,
    description: PostsApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(PostTransform, PostNotFound)
  public async findOne(@Param('id', UUIDValidationPipe) id: string) {
    return this.postsService.findOne(id);
  }

  @ApiOkResponse({
    type: PostDetailedRdo,
    description: PostsApiDesc.GetOne,
  })
  @Get(':id/details')
  @UseInterceptors(DetailedPostTransform, PostNotFound)
  public async findDetailedOne(@Param('id', UUIDValidationPipe) id: string) {
    return this.postsService.findOne(id);
  }

  @ApiOkResponse({
    type: PostsRdo,
    description: PostsApiDesc.Publish,
  })
  @Post('publish')
  @UseInterceptors(PostsTransform)
  public async publish(@Query() query: PostsQuery) {
    return this.postsService.publish(query);
  }

  @ApiOkResponse({
    type: PostDetailedRdo,
    description: PostsApiDesc.Repost,
  })
  @Post('repost')
  @UseInterceptors(DetailedPostTransform, PostNotFound)
  public async repost(@Body() dto: RepostPostDto) {
    return this.postsService.repost(dto);
  }

  @ApiOkResponse({
    type: PostRdo,
    description: PostsApiDesc.CreatePost,
  })
  @Post()
  @UseInterceptors(PostTransform)
  public async create(@Body() dto: CreatePostDto) {
    return this.postsService.create(dto);
  }

  @ApiOkResponse({
    type: PostRdo,
    description: PostsApiDesc.Update,
  })
  @Patch(':id')
  @UseInterceptors(PostTransform, PostNotFound)
  public async update(
    @Param('id', UUIDValidationPipe) id: string,
    @Body() dto: UpdatePostDto,
  ) {
    return this.postsService.update(id, dto);
  }

  @ApiOkResponse({
    type: PostRdo,
    description: PostsApiDesc.Remove,
  })
  @Delete(':id')
  @UseInterceptors(PostTransform, PostNotFound)
  public async remove(
    @Param('id', UUIDValidationPipe) id: string,
    @Body() dto: RemovePostDto,
  ) {
    return this.postsService.remove(id, dto);
  }
}
