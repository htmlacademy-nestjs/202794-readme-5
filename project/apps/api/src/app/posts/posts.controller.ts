import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UploadedFile, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { AxiosExceptionFilter, PhotoFileValidationPipe, ReqUser, UUIDValidationPipe } from '@project/libs/shared/helpers';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateCommentDto, CreatePostDto, UpdateCommentDto, UpdatePostDto } from '@project/libs/posts/clients';
import { MulterFile } from '@project/libs/shared/types';
import { AuthGuard } from '../guards/auth.guard';
import { PostsService } from './posts.service';

@Controller('posts')
@UseFilters(AxiosExceptionFilter)
export class PostsController {
  public constructor(
    private readonly postsService: PostsService,
  ) {}

  @Post('publish')
  public async publishPostsUpdates(
    @Query('since') since: string,
  ) {
    return this.postsService.publishPostsUpdates(since);
  }

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('photo'))
  public async createPost(
    @ReqUser('id') userId: string,
    @Body() dto: CreatePostDto,
    @UploadedFile(PhotoFileValidationPipe) file?: MulterFile,
  ) {
    return this.postsService.createPost(userId, dto, file);
  }

  @Post(':postId/repost')
  @UseGuards(AuthGuard)
  public async createRepost(
    @ReqUser('id') userId: string,
    @Param('postId', UUIDValidationPipe) postId: string,
  ) {
    return this.postsService.createRepost(userId, postId);
  }

  @Patch(':postId')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('photo'))
  public async updatePost(
    @ReqUser('id') userId: string,
    @Param('postId', UUIDValidationPipe) postId: string,
    @Body() dto: UpdatePostDto,
    @UploadedFile(PhotoFileValidationPipe) file?: MulterFile,
  ) {
    return this.postsService.updatePost(userId, postId, dto, file);
  }

  @Delete(':postId')
  @UseGuards(AuthGuard)
  public async removePost(
    @ReqUser('id') userId: string,
    @Param('postId', UUIDValidationPipe) postId: string,
  ) {
    return this.postsService.removePost(userId, postId);
  }

  @Get()
  public async getPosts(
    @Query() query: object,
  ) {
    return this.postsService.getPosts(query);
  }

  @Get('search')
  public async searchPosts(
    @Query('title') title: string,
  ) {
    return this.postsService.searchPosts(title);
  }

  @Get('drafts')
  @UseGuards(AuthGuard)
  public async getDraftsPosts(
    @ReqUser('id') userId: string,
  ) {
    return this.postsService.getDraftsPosts(userId);
  }

  @Get(':postId')
  public async getPost(
    @Param('postId', UUIDValidationPipe) postId: string,
  ) {
    return this.postsService.getPost(postId);
  }

  @Post(':postId/like')
  @UseGuards(AuthGuard)
  public async createPostLike(
    @ReqUser('id') userId: string,
    @Param('postId', UUIDValidationPipe) postId: string,
  ) {
    return this.postsService.createPostLike(userId, postId);
  }

  @Post(':postId/unlike')
  @UseGuards(AuthGuard)
  public async removePostLike(
    @ReqUser('id') userId: string,
    @Param('postId', UUIDValidationPipe) postId: string,
  ) {
    return this.postsService.removePostLike(userId, postId);
  }

  @Get(':postId/comments')
  public async getPostComments(
    @Param('postId', UUIDValidationPipe) postId: string,
    @Query() query: object,
  ) {
    return this.postsService.getPostComments(postId, query);
  }

  @Post(':postId/comments')
  @UseGuards(AuthGuard)
  public async createPostComment(
    @ReqUser('id') userId: string,
    @Param('postId', UUIDValidationPipe) postId: string,
    @Body() dto: CreateCommentDto,
  ) {
    return this.postsService.createPostComment(userId, postId, dto)
  }

  @Patch(':postId/comments/:commentId')
  @UseGuards(AuthGuard)
  public async udatePostComment(
    @ReqUser('id') userId: string,
    @Param('postId', UUIDValidationPipe) postId: string,
    @Param('commentId', UUIDValidationPipe) commentId: string,
    @Body() dto: UpdateCommentDto,
  ) {
    return this.postsService.udatePostComment(userId, postId, commentId, dto);
  }

  @Delete(':postId/comments/:commentId')
  @UseGuards(AuthGuard)
  public async removePostComment(
    @ReqUser('id') userId: string,
    @Param('postId', UUIDValidationPipe) postId: string,
    @Param('commentId', UUIDValidationPipe) commentId: string,
  ) {
    return this.postsService.removePostComment(userId, postId, commentId);
  }
}
