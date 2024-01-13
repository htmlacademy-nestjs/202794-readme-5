import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LimitValidationPipe, MongoIdValidationPipe, OffsetValidationPipe, PostStatusValidationPipe, PostTagsValidationPipe, PostTypeValidationPipe, PostsOrderValidationPipe, UUIDValidationPipe } from '@project/libs/shared/helpers';
import { PostStatus, PostType, PostsOrder } from '@project/libs/shared/types';
import { CreatePostDto } from './posts.dto/create-post.dto';
import { UpdatePostDto } from './posts.dto/update-post.dto';
import { RepostPostDto } from './posts.dto/repost-post.dto';
import { PostTransformInterceptor, PostNotFoundInterceptor, DetailedPostTransformInterceptor } from './posts.interceptors';
import { PostsService } from './posts.service';
import { PostsApiDesc } from './posts.const';

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
  @UseInterceptors(PostTransformInterceptor)
  public async findAll(
    @Query('offset', OffsetValidationPipe) offset?: number,
    @Query('limit', LimitValidationPipe) limit?: number,
    @Query('authorId', MongoIdValidationPipe) authorId?: string,
    @Query('type', PostTypeValidationPipe) type?: PostType,
    @Query('status', PostStatusValidationPipe) status?: PostStatus,
    @Query('tags', PostTagsValidationPipe) tags?: string[],
    @Query('order', PostsOrderValidationPipe) order?: PostsOrder,
  ) {
    return this.postsService.findAll({
      offset, limit, authorId, type, tags, status, order,
    });
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PostsApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(PostTransformInterceptor, PostNotFoundInterceptor)
  public async findOne(@Param('id', UUIDValidationPipe) id: string) {
    return this.postsService.findOne(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PostsApiDesc.GetOne,
  })
  @Get(':id/details')
  @UseInterceptors(DetailedPostTransformInterceptor, PostNotFoundInterceptor)
  public async findDetailedOne(@Param('id', UUIDValidationPipe) id: string) {
    return this.postsService.findOne(id);
  }

  @ApiResponse({
    type: RepostPostDto,
    status: HttpStatus.OK,
    description: PostsApiDesc.Repost,
  })
  @Post('repost')
  @UseInterceptors(PostTransformInterceptor, PostNotFoundInterceptor)
  public async repost(@Body() dto: RepostPostDto) {
    return this.postsService.repost(dto);
  }

  @ApiResponse({
    type: CreatePostDto,
    status: HttpStatus.OK,
    description: PostsApiDesc.CreatePost,
  })
  @Post()
  @UseInterceptors(PostTransformInterceptor)
  public async create(@Body() dto: CreatePostDto) {
    return this.postsService.create(dto);
  }

  @ApiResponse({
    type: UpdatePostDto,
    status: HttpStatus.OK,
    description: PostsApiDesc.Update,
  })
  @Patch(':id')
  @UseInterceptors(PostTransformInterceptor, PostNotFoundInterceptor)
  public async update(
    @Param('id', UUIDValidationPipe) id: string,
    @Body() dto: UpdatePostDto,
  ) {
    return this.postsService.update(id, dto);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: PostsApiDesc.Remove,
  })
  @Delete(':id')
  @UseInterceptors(PostTransformInterceptor, PostNotFoundInterceptor)
  public async remove(@Param('id', UUIDValidationPipe) id: string) {
    return this.postsService.remove(id);
  }
}
