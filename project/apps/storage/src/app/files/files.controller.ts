import { Controller, Get, Post, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MulterFile } from '@project/libs/shared/types';
import { MongoIdValidationPipe } from '@project/libs/shared/helpers';
import { FileNotFound, FileTransform, FilesTransform } from './files.interceptors';
import { FilesRdo } from './files.rdo/files.rdo';
import { FileRdo } from './files.rdo/file.rdo';
import { FilesService } from './files.service';
import { FilesApiDesc } from './files.const';

@ApiTags('Files')
@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
  ) {}

  @ApiOkResponse({
    type: FileRdo,
    description: FilesApiDesc.Upload,
  })
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  public async upload(@UploadedFile() file: MulterFile) {
    return this.filesService.upload(file);
  }

  @ApiOkResponse({
    type: FilesRdo,
    description: FilesApiDesc.GetAll,
  })
  @Get()
  @UseInterceptors(FilesTransform)
  public async findAll() {
    return this.filesService.findAll();
  }

  @ApiOkResponse({
    type: FileRdo,
    description: FilesApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(FileTransform, FileNotFound)
  public async findOne(
    @Param('id', MongoIdValidationPipe) id: string,
  ) {
    return this.filesService.findOne(id);
  }

  @ApiOkResponse({
    type: FileRdo,
    description: FilesApiDesc.Remove,
  })
  @Delete(':id')
  @UseInterceptors(FileTransform, FileNotFound)
  public async remove(
    @Param('id', MongoIdValidationPipe) id: string,
  ) {
    return this.filesService.remove(id);
  }
}
