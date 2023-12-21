import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConnectionString } from '@project/libs/shared/helpers';
import { DBUsersConfigPart } from './db-users.config';

export const MongoUsersModule = MongooseModule.forRootAsync({
  useFactory: async (config: ConfigService<DBUsersConfigPart>) => {
    return {
      uri: getMongoConnectionString({
        username: config.get('db.user', { infer: true }),
        password: config.get('db.password', { infer: true }),
        host: config.get('db.host', { infer: true }),
        port: config.get('db.port', { infer: true }),
        dbName: config.get('db.name', { infer: true }),
        dbAuth: config.get('db.authBase', { infer: true }),
      }),
    };
  },
  inject: [ConfigService],
});
