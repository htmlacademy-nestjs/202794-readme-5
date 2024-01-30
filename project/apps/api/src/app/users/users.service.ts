import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { appApiConfig } from '@project/libs/config/api';
import { AuthApi, SingupUserDto, UpdatePasswordDto, UsersApi } from '@project/libs/users/clients';
import { MulterFile } from '@project/libs/shared/types';
import { AuthorsApi } from '@project/libs/posts/clients';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class UsersService {
  public auth: AuthApi;

  public authors: AuthorsApi;

  public users: UsersApi;

  public get url() {
    return this.appConfig.url;
  }

  public constructor(
    @Inject(appApiConfig.KEY)
    private readonly appConfig: ConfigType<typeof appApiConfig>,
    private readonly httpService: HttpService,
    private readonly storageService: StorageService,
  ) {
    this.auth = new AuthApi(null, this.url.users, this.httpService.axiosRef);
    this.authors = new AuthorsApi(undefined, this.url.posts, this.httpService.axiosRef);
    this.users = new UsersApi(null, this.url.users, this.httpService.axiosRef);
  }

  public async singup(dto: SingupUserDto, file?: MulterFile) {
    const { email, firstname, lastname, password } = dto;
    const filedata = await this.storageService.upload(file);
    const avatar = filedata?.src;
    const user = { email, firstname, lastname, password, avatar };
    const { data } = await this.auth.singup({ singupUserDto: user });

    return data;
  }

  public async singin(dto: unknown) {
    const { data } = await this.auth.singin({ data: dto });
    return data;
  }

  public async getAuthUser(auth?: string) {
    const { data } = await this.auth.getUser(
      { headers: { Authorization: auth } },
    );
    return data;
  }

  public async refreshToken(auth?: string) {
    const { data } = await this.auth.refresh(
      { headers: { Authorization: auth } },
    );
    return data;
  }

  public async updatePassword(dto: UpdatePasswordDto, auth?: string) {
    const { data } = await this.auth.updatePassword(
      { updatePasswordDto: dto },
      { headers: { Authorization: auth } },
    );
    return data;
  }

  public async getUserById(userId: string) {
    const [
      { data: user },
      { data: author },
    ] = await Promise.all([
      this.users.findOne({ id: userId }),
      this.authors.findOne({ id: userId })
    ]);

    return { ...author, ...user };
  }
}
