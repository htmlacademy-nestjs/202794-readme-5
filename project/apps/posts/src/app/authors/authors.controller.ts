import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Delete, UseInterceptors } from '@nestjs/common';
import { MongoIdValidationPipe } from '@project/libs/shared/helpers';
import { AuthorTransform, AuthorNotFound, AuthorsTransform } from './authors.interceptors';
import { AuthorRdo } from './authors.rdo/author.rdo';
import { AuthorsRdo } from './authors.rdo/authors.rdo';
import { AuthorsService } from './authors.service';
import { AuthorsApiDesc } from './authors.const';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @ApiOkResponse({
    type: AuthorsRdo,
    description: AuthorsApiDesc.GetAll,
  })
  @Get()
  @UseInterceptors(AuthorsTransform)
  public async findAll() {
    return this.authorsService.findAll();
  }

  @ApiOkResponse({
    type: AuthorRdo,
    description: AuthorsApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(AuthorTransform, AuthorNotFound)
  public async findOne(@Param('id', MongoIdValidationPipe) id: string) {
    return this.authorsService.findOne(id);
  }

  @ApiOkResponse({
    type: AuthorRdo,
    description: AuthorsApiDesc.Remove,
  })
  @Delete(':id')
  @UseInterceptors(AuthorTransform, AuthorNotFound)
  public async remove(@Param('id', MongoIdValidationPipe) id: string) {
    return this.authorsService.remove(id);
  }
}
