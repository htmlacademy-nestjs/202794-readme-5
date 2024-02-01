import { Injectable } from '@nestjs/common';
import { IFile } from '@project/libs/shared/types';
import { FilesRepository } from './files.repository';

@Injectable()
export class FilesService {
  constructor(
    private readonly filesRepository: FilesRepository,
  ) {}

  public async create(file: IFile) {
    return this.filesRepository.create(file);
  }

  public async findAll() {
    return this.filesRepository.findAll();
  }

  public async findOne(id: string) {
    return this.filesRepository.findOne(id);
  }

  public async remove(id: string) {
    return this.filesRepository.remove(id);
  }
}
