import { Module } from '@nestjs/common';
import { JwtUsersModule } from '@project/libs/config/users';
import { PublishModule } from '@project/libs/notify/publish';
import { TokensModule } from '../tokens/tokens.module';
import { UsersModule } from '../users/users.module';
import { JwtAccessStrategy } from './auth.strategy/jwt-access.strategy';
import { JwtRefreshStrategy } from './auth.strategy/jwt-refresh.strategy';
import { LocalStrategy } from './auth.strategy/local.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtUsersModule,
    PublishModule,
    TokensModule,
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtAccessStrategy,
    JwtRefreshStrategy,
    LocalStrategy,
  ],
})
export class AuthModule {}
