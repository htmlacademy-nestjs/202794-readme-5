import { Controller, Get, Post, Param, Delete, UseInterceptors, UploadedFile, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse } from '@nestjs/swagger';
import { MulterFile } from '@project/libs/shared/types';
import { MongoIdValidationPipe } from '@project/libs/shared/helpers';
import { FileNotFound, FileTransform, FilesTransform } from './files.interceptors';
import { FilesService } from './files.service';
import { FilesApiDesc } from './files.const';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: FilesApiDesc.Upload,
  })
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  public async upload(@UploadedFile() file: MulterFile) {
    return this.filesService.upload(file);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: FilesApiDesc.GetAll,
  })
  @Get()
  @UseInterceptors(FilesTransform)
  public async findAll() {
    return this.filesService.findAll();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: FilesApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(FileTransform, FileNotFound)
  public async findOne(
    @Param('id', MongoIdValidationPipe) id: string,
  ) {
    return this.filesService.findOne(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
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
