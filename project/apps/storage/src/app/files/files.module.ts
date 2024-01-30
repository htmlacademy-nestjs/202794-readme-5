import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { FileModel, FileSchema } from './file.model';
import { FilesRepository } from './files.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FileModel.name, schema: FileSchema },
    ]),
  ],
  controllers: [FilesController],
  providers: [FilesService, FilesRepository],
  exports: [FilesService, FilesRepository],
})
export class FilesModule {}
