import { Controller, Get, Post, Patch, Body, Request, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { transform } from '@project/libs/shared/helpers';
import { ITokenPayload } from '@project/libs/shared/types';
import { UserRdo } from '../users/users.rdo/user.rdo';
import { SinginUserDto } from './auth.dto/singin-user.dto';
import { SingupUserDto } from './auth.dto/singup-user.dto';
import { UpdateUserDto } from './auth.dto/update-user.dto';
import { AuthUserRdo } from './auth.rdo/auth-user.rdo';
import { JwtAuthGuard } from './auth.guards/jwt-auth.guard';
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
  @Post('singup')
  public async singup(@Body() dto: SingupUserDto) {
    return transform(UserRdo, await this.authService.singup(dto));
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
  public async singin(@Body() dto: SinginUserDto) {
    return transform(AuthUserRdo, await this.authService.singin(dto));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: AuthApiDesc.ById,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: AuthApiDesc.Unauthorized,
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  public async getUser(@Request() req) {
    const user: ITokenPayload = req.user;
    return transform(UserRdo, await this.authService.getUser(user.id));
  }

  @ApiResponse({
    type: UpdateUserDto,
    status: HttpStatus.OK,
    description: AuthApiDesc.ById,
  })
  @UseGuards(JwtAuthGuard)
  @Patch()
  public async updateUser(
    @Request() req,
    @Body() dto: UpdateUserDto
  ) {
    const user: ITokenPayload = req.user;
    return transform(AuthUserRdo, await this.authService.updateUser(user.id, dto));
  }
}
