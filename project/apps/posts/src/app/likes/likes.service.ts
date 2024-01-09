import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './likes.dto/create-like.dto';
import { RemoveLikeDto } from './likes.dto/remove-like.dto';
import { LikesRepository } from './likes.repository';
import { ILikesFilter } from './likes.types';

@Injectable()
export class LikesService {
  constructor(
    private readonly likesRepository: LikesRepository
  ) {}

  public async findAll(filter?: ILikesFilter) {
    return this.likesRepository.findAll(filter);
  }

  public async create(dto: CreateLikeDto) {
    return this.likesRepository.create(dto);
  }

  public async remove(dto: RemoveLikeDto) {
    return this.likesRepository.remove(dto);
  }
}
