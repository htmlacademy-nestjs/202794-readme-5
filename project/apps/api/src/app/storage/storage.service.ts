import FormData from 'form-data';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { appApiConfig } from '@project/libs/config/api';
import { MulterFile } from '@project/libs/shared/types';
import { FilesApi } from '@project/libs/storage/clients';

@Injectable()
export class StorageService {
  public files: FilesApi;

  public get url() {
    return this.appConfig.url;
  }

  public constructor(
    @Inject(appApiConfig.KEY)
    private readonly appConfig: ConfigType<typeof appApiConfig>,
    private readonly httpService: HttpService,
  ) {
    this.files = new FilesApi(undefined, this.url.storage, this.httpService.axiosRef);
  }

  public async upload(file?: MulterFile) {
    if (!file) {
      return;
    }
    const form = new FormData();
    form.append('file', file.buffer, file.originalname);
    const headers = form.getHeaders();
    const { data } = await this.files.upload({ headers, data: form });
    return data;
  }
}
