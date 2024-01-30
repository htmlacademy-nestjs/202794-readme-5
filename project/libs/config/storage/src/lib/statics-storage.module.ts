import { ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { AppStorageConfigPart } from './app-storage.config';

export const StaticsStorageModule = ServeStaticModule.forRootAsync({
  useFactory: async (config: ConfigService<AppStorageConfigPart>) => {
    const pwdPath = config.get('app.path.pwd', { infer: true });
    const uploadsPath = config.get('app.path.uploads', { infer: true });
    const staticsPath = config.get('app.path.statics', { infer: true });

    return [
      {
        exclude: ['/api/(.*)'],
        rootPath: join(pwdPath, uploadsPath),
        serveRoot: staticsPath,
        serveStaticOptions: { fallthrough: true, etag: true },
      }
    ];
  },
  inject: [ConfigService],
});
