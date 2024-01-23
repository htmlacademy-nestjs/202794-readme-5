import { Controller, Get, Post, Patch, Body, HttpStatus, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReqUser } from '@project/libs/shared/helpers';
import { User } from '../users/user.entity';
import { UserTransform } from '../users/users.interceptors';
import { SinginUserDto } from './auth.dto/singin-user.dto';
import { SingupUserDto } from './auth.dto/singup-user.dto';
import { UpdateUserDto } from './auth.dto/update-user.dto';
import { JwtAuthGuard } from './auth.guards/jwt-auth.guard';
import { JwtRefreshGuard } from './auth.guards/jwt-refresh.guard';
import { LocalAuthGuard } from './auth.guards/local-auth.guard';
import { NotAuthGuard } from './auth.guards/not-auth.guard';
import { AuthUserNotFound, AuthUserTransform } from './auth.interceptors';
import { AuthService } from './auth.service';
import { AuthApiDesc } from './auth.const';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: AuthApiDesc.Create,
  })
  @Post('singup')
  @UseGuards(NotAuthGuard)
  @UseInterceptors(UserTransform)
  public async singup(@Body() dto: SingupUserDto) {
    return this.authService.singup(dto);
  }

  @ApiResponse({
    type: SinginUserDto,
    status: HttpStatus.OK,
    description: AuthApiDesc.Login,
  })
  @ApiResponse({
    type: SinginUserDto,
    status: HttpStatus.UNAUTHORIZED,
    description: AuthApiDesc.Unauthorized,
  })
  @Post('singin')
  @UseGuards(LocalAuthGuard)
  @UseInterceptors(AuthUserTransform)
  public async singin(@ReqUser() user: User) {
    return this.authService.singin(user);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: AuthApiDesc.ById,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: AuthApiDesc.Unauthorized,
  })
  @Get('user')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(UserTransform, AuthUserNotFound)
  public async getUser(@ReqUser('id') userId: string) {
    return this.authService.getUser(userId);
  }

  @ApiResponse({
    type: UpdateUserDto,
    status: HttpStatus.OK,
    description: AuthApiDesc.ById,
  })
  @Patch('user')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(AuthUserTransform, AuthUserNotFound)
  public async updateUser(
    @ReqUser('id') userId: string,
    @Body() dto: UpdateUserDto
  ) {
    return this.authService.updateUser(userId, dto);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: AuthApiDesc.RefreshToken,
  })
  @Post('refresh')
  @UseGuards(JwtRefreshGuard)
  public async refresh(@ReqUser() user: User) {
    return this.authService.singin(user);
  }
}
