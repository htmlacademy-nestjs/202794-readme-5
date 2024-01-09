import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtUsersConfigPart } from './jwt-users.config';

export const JwtUsersModule = JwtModule.registerAsync({
  useFactory: async (config: ConfigService<JwtUsersConfigPart>) => {
    return {
      secret: config.get('jwt.secret', { infer: true }),
      signOptions: {
        expiresIn: config.get('jwt.expires', { infer: true }),
        algorithm: 'HS256'
      },
    };
  },
  inject: [ConfigService],
});
