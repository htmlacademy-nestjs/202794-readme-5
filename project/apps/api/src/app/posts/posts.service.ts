import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { appApiConfig } from '@project/libs/config/api';
import { MulterFile } from '@project/libs/shared/types';
import { CommentsApi, CreateCommentDto, CreatePostDto, LikesApi, PostsApi, UpdateCommentDto, UpdatePostDto } from '@project/libs/posts/clients';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class PostsService {
  public comments: CommentsApi;

  public likes: LikesApi;

  public posts: PostsApi;

  public get url() {
    return this.appConfig.url;
  }

  public constructor(
    @Inject(appApiConfig.KEY)
    private readonly appConfig: ConfigType<typeof appApiConfig>,
    private readonly httpService: HttpService,
    private readonly storageService: StorageService,
  ) {
    this.comments = new CommentsApi(undefined, this.url.posts, this.httpService.axiosRef);
    this.likes = new LikesApi(undefined, this.url.posts, this.httpService.axiosRef);
    this.posts = new PostsApi(undefined, this.url.posts, this.httpService.axiosRef);
  }

  public async publishPostsUpdates(since: string) {
    const { data } = await this.posts.publish({ since });
    return data;
  }

  public async createPost(
    authorId: string,
    dto: CreatePostDto,
    file?: MulterFile,
  ) {
    const filedata = await this.storageService.upload(file);
    const url = filedata?.src;

    if (dto?.postType === 'PHOTO') {
      dto.payload = { ...dto.payload, url};
    }
    const createPostDto = { ...dto, authorId };
    const { data } = await this.posts.create({ createPostDto });
    return data;
  }

  public async createRepost(authorId: string, postId: string) {
    const { data } = await this.posts.repost({
      repostPostDto: { authorId, postId },
     });
    return data;
  }

  public async updatePost(
    authorId: string,
    postId: string,
    dto: UpdatePostDto,
    file?: MulterFile,
  ) {
    const filedata = await this.storageService.upload(file);
    const url = filedata?.src;

    if (dto?.postType === 'PHOTO') {
      dto.payload = { ...dto.payload, url};
    }
    const { data } = await this.posts.update({
      id: postId, updatePostDto: { ...dto, authorId },
    });
    return data;
  }

  public async removePost(authorId: string, postId: string) {
    const { data } = await this.posts.remove({
      id: postId, removePostDto: { authorId },
    });
    return data;
  }

  public async getPosts(query: object) {
    const { data } = await this.posts.findAll(query);
    return data;
  }

  public async searchPosts(title: string) {
    const { data } = await this.posts.findAll({ title });
    return data;
  }

  public async getDraftsPosts(authorId: string) {
    const { data } = await this.posts.findAll({ authorId, status: 'DRAFT' });
    return data;
  }

  public async getPost(postId: string) {
    const { data } = await this.posts.findDetailedOne({ id: postId });
    return data;
  }

  public async createPostLike(authorId: string, postId: string) {
    const createLikeDto = { authorId, postId };
    const { data } = await this.likes.create({ createLikeDto });
    return data;
  }

  public async removePostLike(authorId: string, postId: string) {
    const removeLikeDto = { authorId, postId };
    const { data } = await this.likes.remove({ removeLikeDto });
    return data;
  }

  public async getPostComments(postId: string, query: object) {
    const { data } = await this.comments.findAll({ ...query, postId });
    return data;
  }

  public async createPostComment(authorId: string, postId: string, dto: CreateCommentDto) {
    const createCommentDto = { message: dto.message, authorId, postId };
    const { data } = await this.comments.create({ createCommentDto });
    return data;
  }

  public async udatePostComment(authorId: string, postId: string, commentId: string, dto: UpdateCommentDto) {
    const updateCommentDto = { message: dto.message, postId, authorId };
    const { data } = await this.comments.update({ id: commentId, updateCommentDto });
    return data;
  }

  public async removePostComment(authorId: string, postId: string, commentId: string) {
    const { data } = await this.comments.remove({
      id: commentId, removeCommentDto: { postId, authorId },
    });
    return data;
  }
}
