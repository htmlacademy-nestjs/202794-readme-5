import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { appApiConfig } from '@project/libs/config/api';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly httpService: HttpService,
    @Inject(appApiConfig.KEY)
    private readonly appConfig: ConfigType<typeof appApiConfig>,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { data } = await this.httpService.axiosRef.get(
      `${this.appConfig.url.users}/auth/user`,
      { headers: { 'Authorization': request.headers['authorization'] } },
    )
    request['user'] = data;
    return true;
  }
}
