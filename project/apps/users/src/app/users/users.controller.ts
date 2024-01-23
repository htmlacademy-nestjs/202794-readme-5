import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MongoIdValidationPipe } from '@project/libs/shared/helpers';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto/create-user.dto';
import { UpdateUserDto } from './users.dto/update-user.dto';
import { UserNotFound, UserTransform, UsersTransform } from './users.interceptors';
import { UsersApiDesc } from './users.const';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: UsersApiDesc.GetAll,
  })
  @Get()
  @UseInterceptors(UsersTransform)
  public async findAll() {
    return this.usersService.findAll();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: UsersApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(UserTransform, UserNotFound)
  public async findOne(@Param('id', MongoIdValidationPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @ApiResponse({
    type: CreateUserDto,
    status: HttpStatus.OK,
    description: UsersApiDesc.Create,
  })
  @Post()
  @UseInterceptors(UserTransform)
  public async create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @ApiResponse({
    type: UpdateUserDto,
    status: HttpStatus.OK,
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

  @ApiResponse({
    status: HttpStatus.OK,
    description: UsersApiDesc.Remove,
  })
  @Delete(':id')
  @UseInterceptors(UserTransform, UserNotFound)
  public async remove(@Param('id', MongoIdValidationPipe) id: string) {
    return this.usersService.remove(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: UsersApiDesc.Remove,
  })
  @Delete()
  public async removeAll() {
    return this.usersService.removeAll();
  }
}
