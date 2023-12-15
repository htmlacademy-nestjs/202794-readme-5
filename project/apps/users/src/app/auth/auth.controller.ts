import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { transform } from "@project/libs/shared/helpers";
import { CreateUserDto } from '../users/users.dto/create-user.dto';
import { UserRdo } from '../users/users.rdo/user.rdo';
import { LoginUserDto } from './auth.dto/login-user.dto';
import { LoggedUserRdo } from './auth.rdo/logged-user.rdo';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Регистрация нового пользователя',
  })
  @Post('register')
  public async register(@Body() dto: CreateUserDto) {
    const user = await this.authService.register(dto);
    return transform(UserRdo, user);
  }

  @ApiResponse({
    type: LoginUserDto,
    status: HttpStatus.OK,
    description: 'Вход пользователя',
  })
  @ApiResponse({
    type: LoginUserDto,
    status: HttpStatus.UNAUTHORIZED,
    description: 'Указан неверный пароль или email',
  })
  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.login(dto);
    return transform(LoggedUserRdo, user);
  }
}
