import { Controller, Get, Param, Delete, HttpStatus, UseInterceptors } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthorsService } from './authors.service';
import { AuthorsApiDesc } from './authors.const';
import { AuthorTransformInterceptor, AuthorNotFoundInterceptor } from './authors.interceptors';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: AuthorsApiDesc.GetAll,
  })
  @Get()
  @UseInterceptors(AuthorTransformInterceptor)
  public async findAll() {
    return this.authorsService.findAll();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: AuthorsApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(AuthorTransformInterceptor, AuthorNotFoundInterceptor)
  public async findOne(@Param('id') id: string) {
    return this.authorsService.findOne(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: AuthorsApiDesc.Remove,
  })
  @Delete(':id')
  @UseInterceptors(AuthorTransformInterceptor, AuthorNotFoundInterceptor)
  public async remove(@Param('id') id: string) {
    return this.authorsService.remove(id);
  }
}
