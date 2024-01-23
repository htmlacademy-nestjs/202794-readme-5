import { Module } from '@nestjs/common';
import { ConfigUsersModule, MongoUsersModule } from '@project/libs/config/users';
import { PublishModule } from '@project/libs/notify/publish';
import { AuthModule } from './auth/auth.module';
import { TokensModule } from './tokens/tokens.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    ConfigUsersModule,
    MongoUsersModule,
    PublishModule,
    TokensModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
