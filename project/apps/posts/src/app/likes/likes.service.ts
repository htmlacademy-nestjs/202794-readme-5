import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './likes.dto/create-like.dto';
import { RemoveLikeDto } from './likes.dto/remove-like.dto';
import { LikesRepository } from './likes.repository';
import { ILikesFilters } from './likes.filters';

@Injectable()
export class LikesService {
  constructor(
    private readonly likesRepository: LikesRepository
  ) {}

  public async findAll(filters?: ILikesFilters) {
    return this.likesRepository.findAll(filters);
  }

  public async create(dto: CreateLikeDto) {
    return this.likesRepository.create(dto);
  }

  public async remove(dto: RemoveLikeDto) {
    return this.likesRepository.remove(dto);
  }
}
