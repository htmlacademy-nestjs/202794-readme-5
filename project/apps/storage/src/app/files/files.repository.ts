import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoRepository } from '@project/libs/shared/core'
import { File } from './file.entity';
import { FileModel } from './file.model';

@Injectable()
export class FilesRepository extends MongoRepository<File> {
  constructor(
    @InjectModel(FileModel.name) protected readonly model: Model<File>,
  ) {
    super(File);
  }
}
