import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { transform } from "@project/libs/shared/helpers";
import { UserRdo } from '../users/users.rdo/user.rdo';
import { LoginUserDto } from './auth.dto/login-user.dto';
import { RegisterUserDto } from './auth.dto/register-user.dto';
import { LoggedUserRdo } from './auth.rdo/logged-user.rdo';
import { AuthService } from './auth.service';
import { AuthApiDesc } from './auth.const';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: AuthApiDesc.Create,
  })
  @Post('register')
  public async register(@Body() dto: RegisterUserDto) {
    const user = await this.authService.register(dto);
    return transform(UserRdo, user);
  }

  @ApiResponse({
    type: LoginUserDto,
    status: HttpStatus.OK,
    description: AuthApiDesc.Login,
  })
  @ApiResponse({
    type: LoginUserDto,
    status: HttpStatus.UNAUTHORIZED,
    description: AuthApiDesc.Unauthorized,
  })
  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.login(dto);
    return transform(LoggedUserRdo, user);
  }
}
