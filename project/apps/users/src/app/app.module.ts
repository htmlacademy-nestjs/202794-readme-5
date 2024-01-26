import { Module } from '@nestjs/common';
import { ConfigUsersModule } from '@project/libs/config/users';
import { MongoModule } from '@project/libs/config/mongo';
import { PublishModule } from '@project/libs/notify/publish';
import { AuthModule } from './auth/auth.module';
import { TokensModule } from './tokens/tokens.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    ConfigUsersModule,
    MongoModule,
    PublishModule,
    TokensModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
