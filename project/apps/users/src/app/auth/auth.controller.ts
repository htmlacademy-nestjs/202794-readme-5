import { Controller, Get, Post, Patch, Body, HttpStatus, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReqUser } from '@project/libs/shared/helpers';
import { UserRdo } from '../users/users.rdo/user.rdo';
import { AuthUserRdo } from './auth.rdo/auth-user.rdo';
import { User } from '../users/user.entity';
import { UserTransform } from '../users/users.interceptors';
import { SingupUserDto } from './auth.dto/singup-user.dto';
import { UpdatePasswordDto } from './auth.dto/update-password.dto';
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
    type: UserRdo,
    status: HttpStatus.CREATED,
    description: AuthApiDesc.Create,
  })
  @Post('singup')
  @UseGuards(NotAuthGuard)
  @UseInterceptors(UserTransform)
  public async singup(@Body() dto: SingupUserDto) {
    return this.authService.singup(dto);
  }

  @ApiOkResponse({
    type: AuthUserRdo,
    description: AuthApiDesc.Login,
  })
  @ApiResponse({
    type: AuthUserRdo,
    status: HttpStatus.UNAUTHORIZED,
    description: AuthApiDesc.Unauthorized,
  })
  @Post('singin')
  @UseGuards(LocalAuthGuard)
  @UseGuards(NotAuthGuard)
  @UseInterceptors(AuthUserTransform)
  public async singin(@ReqUser() user: User) {
    return this.authService.singin(user);
  }

  @ApiOkResponse({
    type: UserRdo,
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

  @ApiOkResponse({
    type: UserRdo,
    description: AuthApiDesc.ById,
  })
  @Patch('password')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(UserTransform, AuthUserNotFound)
  public async updatePassword(
    @ReqUser('id') userId: string,
    @Body() dto: UpdatePasswordDto,
  ) {
    return this.authService.updateUserPassword(userId, dto);
  }

  @ApiOkResponse({
    type: AuthUserRdo,
    description: AuthApiDesc.RefreshToken,
  })
  @Post('refresh')
  @UseGuards(JwtRefreshGuard)
  @UseInterceptors(AuthUserTransform)
  public async refresh(@ReqUser() user: User) {
    return this.authService.singin(user);
  }
}
