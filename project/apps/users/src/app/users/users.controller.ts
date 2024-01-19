import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MongoIdValidationPipe, transform } from '@project/libs/shared/helpers';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto/create-user.dto';
import { UpdateUserDto } from './users.dto/update-user.dto';
import { UserRdo } from './users.rdo/user.rdo';
import { UsersApiDesc } from './users.const';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @ApiResponse({
    type: CreateUserDto,
    status: HttpStatus.OK,
    description: UsersApiDesc.Create,
  })
  @Post()
  public async create(@Body() dto: CreateUserDto) {
    const user = await this.usersService.create(dto);
    return transform(UserRdo, user);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: UsersApiDesc.GetAll,
  })
  @Get()
  public async findAll() {
    const users = await this.usersService.findAll();
    const count = users.count;
    return { count, items: transform(UserRdo, users.items) };
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: UsersApiDesc.GetOne,
  })
  @Get(':id')
  public async findOne(
    @Param('id', MongoIdValidationPipe) id: string,
  ) {
    const user = await this.usersService.findOne(id);
    return transform(UserRdo, user);
  }

  @ApiResponse({
    type: UpdateUserDto,
    status: HttpStatus.OK,
    description: UsersApiDesc.Update,
  })
  @Patch(':id')
  public async update(
    @Param('id', MongoIdValidationPipe) id: string,
    @Body() dto: UpdateUserDto,
  ) {
    const user = await this.usersService.update(id, dto);
    return transform(UserRdo, user);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: UsersApiDesc.Remove,
  })
  @Delete(':id')
  public async remove(
    @Param('id', MongoIdValidationPipe) id: string,
  ) {
    const user = await this.usersService.remove(id);
    return transform(UserRdo, user);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: UsersApiDesc.Remove,
  })
  @Delete()
  public async removeAll() {
    const count = await this.usersService.removeAll();
    return { count };
  }
}
