import { HttpService } from '@nestjs/axios';
import { ConfigType } from '@nestjs/config';
import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ReqUser, UUIDValidationPipe } from '@project/libs/shared/helpers';
import { appApiConfig } from '@project/libs/config/api';
import { CommentsApi } from '@project/libs/posts/clients';
import { AuthGuard } from './app.guards/auth.guard';
import { IUser } from '@project/libs/shared/types';

@Controller('posts')
export class PostsController {
  private commentsApi: CommentsApi;

  public constructor(
    private readonly httpService: HttpService,
    @Inject(appApiConfig.KEY)
    private readonly appConfig: ConfigType<typeof appApiConfig>,
  ) {
    this.commentsApi = new CommentsApi({
      basePath: this.appConfig.url.posts,
      isJsonMime: () => false,
    }, undefined, this.httpService.axiosRef);
  }

  @Post()
  @UseGuards(AuthGuard)
  public async createPost(
    @ReqUser() user: IUser,
    @Body() dto: unknown,
  ) {
    return;
  }

  @Post('notify')
  @UseGuards(AuthGuard)
  public async notifyUpdates(
    @ReqUser() user: IUser,
    @Query('since') since: string,
  ) {
    return;
  }

  @Post(':postId/repost')
  @UseGuards(AuthGuard)
  public async createRepost(
    @ReqUser() user: IUser,
    @Param('postId', UUIDValidationPipe) postId: string,
  ) {
    return;
  }

  @Patch(':postId')
  @UseGuards(AuthGuard)
  public async updatePost(
    @ReqUser() user: IUser,
    @Param('postId', UUIDValidationPipe) postId: string,
    @Body() dto: unknown
  ) {
    return;
  }

  @Delete(':postId')
  @UseGuards(AuthGuard)
  public async removePost(
    @ReqUser() user: IUser,
    @Param('postId', UUIDValidationPipe) postId: string,
  ) {
    return;
  }

  @Get()
  public async getPosts(
    @Query() query: object,
  ) {
    return;
  }

  @Get('search')
  public async searchPosts(
    @Query() query: object,
  ) {
    return;
  }

  @Get('drafts')
  @UseGuards(AuthGuard)
  public async getDraftsPosts(
    @ReqUser() user: IUser,
  ) {
    return;
  }

  @Get('feed')
  @UseGuards(AuthGuard)
  public async getPostsFeed(
    @ReqUser() user: IUser,
    @Query() query: object,
  ) {
    return;
  }

  @Get(':postId')
  public async getPost(
    @Param('postId', UUIDValidationPipe) postId: string,
  ) {
    return;
  }

  @Post(':postId/like')
  @UseGuards(AuthGuard)
  public async createPostLike(
    @ReqUser() user: IUser,
    @Param('postId', UUIDValidationPipe) postId: string,
  ) {
    return;
  }

  @Delete(':postId/unlike')
  @UseGuards(AuthGuard)
  public async removePostLike(
    @ReqUser() user: IUser,
    @Param('postId', UUIDValidationPipe) postId: string,
  ) {
    return;
  }

  @Get(':postId/comments')
  public async getPostComments(
    @Param('postId', UUIDValidationPipe) postId: string,
  ) {
    return this.commentsApi.findAll({ params: { postId } });
  }

  @Post(':postId/comments')
  @UseGuards(AuthGuard)
  public async createPostComment(
    @ReqUser() user: IUser,
    @Param('postId', UUIDValidationPipe) postId: string,
    @Body() dto: unknown,
  ) {
    return;
  }

  @Patch(':postId/comments/:commentId')
  @UseGuards(AuthGuard)
  public async udatePostComment(
    @ReqUser() user: IUser,
    @Param('postId', UUIDValidationPipe) postId: string,
    @Param('commentId', UUIDValidationPipe) commentId: string,
    @Body() dto: unknown,
  ) {
    return;
  }

  @Delete(':postId/comments/:commentId')
  @UseGuards(AuthGuard)
  public async removePostComment(
    @ReqUser() user: IUser,
    @Param('postId', UUIDValidationPipe) postId: string,
    @Param('commentId', UUIDValidationPipe) commentId: string,
  ) {
    return;
  }
}
