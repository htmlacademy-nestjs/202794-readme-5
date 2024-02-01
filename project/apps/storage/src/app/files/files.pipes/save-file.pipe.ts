import { Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { WriteFilePipe } from '@project/libs/shared/helpers';
import { appStorageConfig } from '@project/libs/config/storage';

export class SaveFilePipe extends WriteFilePipe {
  constructor(
    @Inject(appStorageConfig.KEY)
    private readonly appConfig: ConfigType<typeof appStorageConfig>,
  ) {
    super(
      appConfig.path.uploads,
      appConfig.path.statics,
      appConfig.path.pwd,
    )
  }
}
