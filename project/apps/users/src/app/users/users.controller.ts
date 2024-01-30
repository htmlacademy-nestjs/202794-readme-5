import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { MongoIdValidationPipe } from '@project/libs/shared/helpers';
import { UserNotFound, UserTransform, UsersTransform } from './users.interceptors';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto/create-user.dto';
import { UpdateUserDto } from './users.dto/update-user.dto';
import { UsersRdo } from './users.rdo/users.rdo';
import { UserRdo } from './users.rdo/user.rdo';
import { UsersApiDesc } from './users.const';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @ApiOkResponse({
    type: UsersRdo,
    description: UsersApiDesc.GetAll,
  })
  @Get()
  @UseInterceptors(UsersTransform)
  public async findAll() {
    return this.usersService.findAll();
  }

  @ApiOkResponse({
    type: UserRdo,
    description: UsersApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(UserTransform, UserNotFound)
  public async findOne(@Param('id', MongoIdValidationPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOkResponse({
    type: UserRdo,
    description: UsersApiDesc.Create,
  })
  @Post()
  @UseInterceptors(UserTransform)
  public async create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @ApiOkResponse({
    type: UserRdo,
    description: UsersApiDesc.Update,
  })
  @Patch(':id')
  @UseInterceptors(UserTransform, UserNotFound)
  public async update(
    @Param('id', MongoIdValidationPipe) id: string,
    @Body() dto: UpdateUserDto,
  ) {
    return this.usersService.update(id, dto);
  }

  @ApiOkResponse({
    type: UserRdo,
    description: UsersApiDesc.Remove,
  })
  @Delete(':id')
  @UseInterceptors(UserTransform, UserNotFound)
  public async remove(@Param('id', MongoIdValidationPipe) id: string) {
    return this.usersService.remove(id);
  }

  @ApiOkResponse({
    type: Number,
    description: UsersApiDesc.Remove,
  })
  @Delete()
  public async removeAll() {
    return this.usersService.removeAll();
  }
}
