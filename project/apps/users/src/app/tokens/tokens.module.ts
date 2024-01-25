import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RefreshTokenModel, RefreshTokenSchema } from './refresh-token.model';
import { RefreshTokensRepository } from './refresh-tokens.repository';
import { TokensService } from './tokens.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RefreshTokenModel.name, schema: RefreshTokenSchema },
    ]),
  ],
  providers: [RefreshTokensRepository, TokensService],
  exports: [RefreshTokensRepository, TokensService],
})
export class TokensModule {}
