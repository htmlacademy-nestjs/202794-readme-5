import { Injectable, NotFoundException } from '@nestjs/common';
import { IPostComment } from '@project/libs/shared/types';
import { CreateCommentDto } from './comments.dto/create-comment.dto';
import { UpdateCommentDto } from './comments.dto/update-comment.dto';
import { CommentsRepository } from './comments.repository';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentsRepository: CommentsRepository
  ) {}

  public async create(dto: CreateCommentDto) {
    const comment: Partial<IPostComment> = {
      postId: dto.postId,
      ownerId: '657f1aaf5c958e259613d1df',
      message: dto.message,
    };
    return this.commentsRepository.create(comment);
  }

  public async findAll() {
    return this.commentsRepository.findAll();
  }

  public async findOne(id: string) {
    const comment = await this.commentsRepository.findOne(id);

    if (!comment) {
      throw new NotFoundException('Comment with id not found');
    }
    return comment;
  }

  public async update(id: string, dto: UpdateCommentDto) {
    if (!await this.commentsRepository.findOne(id)) {
      throw new NotFoundException('Comment with id not found');
    }
    return this.commentsRepository.update(id, dto);
  }

  public async remove(id: string) {
    if (!await this.commentsRepository.findOne(id)) {
      throw new NotFoundException('Comment with id not found');
    }
    return this.commentsRepository.remove(id);
  }
}
