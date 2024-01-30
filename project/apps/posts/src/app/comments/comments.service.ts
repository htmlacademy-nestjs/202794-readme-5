import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './comments.dto/create-comment.dto';
import { UpdateCommentDto } from './comments.dto/update-comment.dto';
import { RemoveCommentDto } from './comments.dto/remove-comment.dto';
import { CommentsRepository } from './comments.repository';
import { ICommentsFilters } from './comments.filters';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentsRepository: CommentsRepository
  ) {}

  public async findAll(filters?: ICommentsFilters) {
    return this.commentsRepository.findAll(filters);
  }

  public async findOne(id: string) {
    return this.commentsRepository.findOne(id);;
  }

  public async create(dto: CreateCommentDto) {
    return this.commentsRepository.create(dto);
  }

  public async update(id: string, dto: UpdateCommentDto) {
    return this.commentsRepository.update(id, dto);
  }

  public async remove(id: string, dto: RemoveCommentDto) {
    return this.commentsRepository.remove(id, dto);
  }
}
