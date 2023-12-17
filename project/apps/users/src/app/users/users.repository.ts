import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoRepository } from '@project/libs/shared/core'
import { User } from './user.entity';
import { UserModel } from './user.model';

@Injectable()
export class UsersRepository extends MongoRepository<User> {
  constructor(
    @InjectModel(UserModel.name) protected readonly model: Model<User>,
  ) {
    super();
  }

  public async findByEmail(email: string) {
    return this.model.findOne({ email });
  }
}
