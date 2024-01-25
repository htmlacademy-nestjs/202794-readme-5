import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoRepository } from '@project/libs/shared/core'
import { ToEntity } from '@project/libs/shared/helpers';
import { User } from './user.entity';
import { UserModel } from './user.model';

@Injectable()
export class UsersRepository extends MongoRepository<User> {
  constructor(
    @InjectModel(UserModel.name) protected readonly model: Model<User>,
  ) {
    super(User);
  }

  @ToEntity()
  public async findByEmail(email: string): Promise<User> {
    return this.model.findOne({ email });
  }
}
