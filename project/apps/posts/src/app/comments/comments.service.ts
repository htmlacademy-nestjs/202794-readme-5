import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './comments.dto/create-comment.dto';
import { UpdateCommentDto } from './comments.dto/update-comment.dto';
import { CommentsRepository } from './comments.repository';
import { IPostComment } from '@project/libs/shared/types';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentsRepository: CommentsRepository
  ) {}

  public async create(dto: CreateCommentDto) {
    const comment: IPostComment = {
      postId: dto.postId,
      ownerId: '',
      dateOfCreation: new Date(),
      text: dto.text
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
    if (!await this.commentsRepository.contains(id)) {
      throw new NotFoundException('Comment with id not found');
    }
    return this.commentsRepository.update(id, dto);
  }

  public async remove(id: string) {
    if (!await this.commentsRepository.contains(id)) {
      throw new NotFoundException('Comment with id not found');
    }
    return this.commentsRepository.remove(id);
  }
}
