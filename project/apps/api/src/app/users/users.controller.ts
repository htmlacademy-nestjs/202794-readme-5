import type { Request } from 'express';
import { Body, Controller, Get, Param, Patch, Post, Req, UseFilters, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AvatarFileValidationPipe, AxiosExceptionFilter, MongoIdValidationPipe, ReqUser } from '@project/libs/shared/helpers';
import { FileInterceptor } from '@nestjs/platform-express';
import type { SingupUserDto, UpdatePasswordDto } from '@project/libs/users/clients';
import { MulterFile } from '@project/libs/shared/types';
import { AuthGuard } from '../guards/auth.guard';
import { UsersService } from './users.service';

@Controller('users')
@UseFilters(AxiosExceptionFilter)
export class UsersController {
  public constructor(
    private readonly userService: UsersService,
  ) {}

  @Post('singup')
  @UseInterceptors(FileInterceptor('avatar'))
  public async singup(
    @Body() dto: SingupUserDto,
    @UploadedFile(AvatarFileValidationPipe) file: MulterFile,
  ) {
    return this.userService.singup(dto, file);
  }

  @Post('singin')
  public async singin(
    @Body() dto: unknown,
  ) {
    return this.userService.singin(dto);
  }

  @Get('user')
  public async getAuthUser(
    @Req() req: Request
  ) {
    return this.userService.getAuthUser(req.headers['authorization']);
  }

  @Get('refresh')
  public async refreshToken(
    @Req() req: Request
  ) {
    return this.userService.refreshToken(req.headers['authorization']);
  }

  @Patch('password')
  @UseGuards(AuthGuard)
  public async updatePassword(
    @Req() req: Request,
    @Body() dto: UpdatePasswordDto,
  ) {
    return this.userService.updatePassword(dto, req.headers['authorization']);
  }

  @Get('user/:userId')
  public async getUserById(
    @Param('userId', MongoIdValidationPipe) userId: string,
  ) {
    return this.userService.getUserById(userId);
  }
}
