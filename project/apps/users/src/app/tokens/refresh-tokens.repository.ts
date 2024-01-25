import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoRepository } from '@project/libs/shared/core';
import { ToEntity } from '@project/libs/shared/helpers';
import { RefreshToken } from './refresh-token.entity';
import { RefreshTokenModel } from './refresh-token.model';

@Injectable()
export class RefreshTokensRepository extends MongoRepository<RefreshToken> {
  constructor(
    @InjectModel(RefreshTokenModel.name) protected readonly model: Model<RefreshToken>,
  ) {
    super(RefreshToken);
  }

  @ToEntity()
  public async findByTokenId(tokenId: string) {
    return this.model.findOne({ tokenId }).exec();
  }

  @ToEntity()
  public async removeByTokenId(tokenId: string) {
    return this.model.deleteOne({ tokenId }).exec();
  }

  public async removeAllExpired() {
    const { deletedCount } = await this.model.deleteMany({
      expiresIn: { $lt: new Date() },
    });
    return deletedCount;
  }
}
