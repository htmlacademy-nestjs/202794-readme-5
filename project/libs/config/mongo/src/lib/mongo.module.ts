import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConnectionString } from '@project/libs/shared/helpers';
import { MongoConfigPart } from './mongo.config';

export const MongoModule = MongooseModule.forRootAsync({
  useFactory: async (config: ConfigService<MongoConfigPart>) => {
    return {
      uri: getMongoConnectionString({
        username: config.get('mongo.user', { infer: true }),
        password: config.get('mongo.password', { infer: true }),
        host: config.get('mongo.host', { infer: true }),
        port: config.get('mongo.port', { infer: true }),
        dbName: config.get('mongo.name', { infer: true }),
        dbAuth: config.get('mongo.authBase', { infer: true }),
      }),
    };
  },
  inject: [ConfigService],
});
