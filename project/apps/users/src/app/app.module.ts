import { Module } from '@nestjs/common';
import { ConfigUsersModule } from '@project/config/users'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigUsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
