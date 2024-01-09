import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './comments.dto/create-comment.dto';
import { UpdateCommentDto } from './comments.dto/update-comment.dto';
import { CommentsRepository } from './comments.repository';
import { CommentsErrorMessage } from './comments.const';
import { ICommentsFilter } from './comments.types';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentsRepository: CommentsRepository
  ) {}

  protected async findOneOrThrow(id: string) {
    const comment = await this.commentsRepository.findOne(id);
    if (!comment) throw new NotFoundException(CommentsErrorMessage.CommentIdNotFound);
    return comment;
  }

  public async findAll(filter?: ICommentsFilter) {
    return this.commentsRepository.findAll(filter);
  }

  public async findOne(id: string) {
    return this.findOneOrThrow(id);
  }

  public async create(dto: CreateCommentDto) {
    return this.commentsRepository.create(dto);
  }

  public async update(id: string, dto: UpdateCommentDto) {
    await this.findOneOrThrow(id);
    return this.commentsRepository.update(id, dto);
  }

  public async remove(id: string) {
    await this.findOneOrThrow(id);
    return this.commentsRepository.remove(id);
  }
}
