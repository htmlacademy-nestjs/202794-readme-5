import { Injectable } from '@nestjs/common';
import { AuthorsRepository } from './authors.repository';

@Injectable()
export class AuthorsService {
  constructor(
    private readonly authorsRepository: AuthorsRepository,
  ) {}

  public async findAll() {
    return this.authorsRepository.findAll();
  }

  public async findOne(id: string) {
    return this.authorsRepository.findOne(id);
  }

  public async remove(id: string) {
    return this.authorsRepository.remove(id);
  }
}
