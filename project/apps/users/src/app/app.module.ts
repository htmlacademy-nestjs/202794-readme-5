import { Module } from '@nestjs/common';
import { ConfigUsersModule, MongoUsersModule } from '@project/libs/config/users';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigUsersModule,
    MongoUsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
