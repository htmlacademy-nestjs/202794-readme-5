import { Module } from '@nestjs/common';
import { JwtUsersModule } from '@project/libs/config/users';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAccessStrategy } from './auth.strategy/jwt-access.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule, JwtUsersModule],
  controllers: [AuthController],
  providers: [AuthService, JwtAccessStrategy],
})
export class AuthModule {}
