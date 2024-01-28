import { HttpService } from '@nestjs/axios';
import { ConfigType } from '@nestjs/config';
import { Body, Controller, Get, Inject, Param, Patch, Post, UseFilters, UseGuards } from '@nestjs/common';
import { AxiosExceptionFilter, MongoIdValidationPipe, ReqUser } from '@project/libs/shared/helpers';
import { appApiConfig } from '@project/libs/config/api';
import { IUser } from '@project/libs/shared/types';
import { AuthGuard } from './app.guards/auth.guard';

@Controller('users')
@UseFilters(AxiosExceptionFilter)
export class UsersController {
  public constructor(
    private readonly httpService: HttpService,
    @Inject(appApiConfig.KEY)
    private readonly appConfig: ConfigType<typeof appApiConfig>,
  ) {}

  @Post('singup')
  public async singup(
    @Body() dto: unknown,
  ) {
    return;
  }

  @Post('singin')
  public async singin(
    @Body() dto: unknown,
  ) {
    const url = `${this.appConfig.url.users}/auth/singin`;
    const { data } = await this.httpService.axiosRef.post<unknown>(url, dto);
    return data;
  }

  @Get('user')
  @UseGuards(AuthGuard)
  public async getAuthUser(
    @ReqUser() user: IUser,
  ) {
    return user;
  }

  @Get('refresh')
  @UseGuards(AuthGuard)
  public async refreshAuthToken(
    @ReqUser() user: IUser
  ) {
    return;
  }

  @Patch('user')
  @UseGuards(AuthGuard)
  public async updateAuthUser(
    @ReqUser() user: IUser,
    @Body() dto: unknown,
  ) {
    return;
  }

  @Get('user/:userId')
  public async getUserById(
    @Param('userId', MongoIdValidationPipe) userId: string,
  ) {
    return;
  }

  @Post('user/:userId/subscribe')
  @UseGuards(AuthGuard)
  public async subscribe(
    @Param('userId', MongoIdValidationPipe) userId: string,
  ) {
    return;
  }

  @Post('user/:userId/unsubscribe')
  @UseGuards(AuthGuard)
  public async unsubscribe(
    @Param('userId', MongoIdValidationPipe) userId: string,
  ) {
    return;
  }
}
