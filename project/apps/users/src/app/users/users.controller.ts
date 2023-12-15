import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { transform } from '@project/libs/shared/helpers';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto/create-user.dto';
import { UpdateUserDto } from './users.dto/update-user.dto';
import { UserRdo } from './users.rdo/user.rdo';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @ApiResponse({
    type: CreateUserDto,
    status: HttpStatus.OK,
    description: 'Создать пользователя',
  })
  @Post()
  public async create(@Body() dto: CreateUserDto) {
    const user = await this.usersService.create(dto);
    return transform(UserRdo, user);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Вернуть список пользователей',
  })
  @Get()
  public async findAll() {
    const users = await this.usersService.findAll();
    return { users: transform(UserRdo, users) };
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Вернуть пользователя',
  })
  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    return transform(UserRdo, user);
  }

  @ApiResponse({
    type: UpdateUserDto,
    status: HttpStatus.OK,
    description: 'Обновить данные пользователей',
  })
  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    const user = await this.usersService.update(id, dto);
    return transform(UserRdo, user);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Удалить пользователя',
  })
  @Delete(':id')
  public async remove(@Param('id') id: string) {
    const user = await this.usersService.remove(id);
    return transform(UserRdo, user);
  }
}
