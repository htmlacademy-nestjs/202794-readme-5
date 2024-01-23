import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoRepository } from '@project/libs/shared/core'
import { ToEntity } from '@project/libs/shared/helpers';
import { Subscriber } from './subscriber.entity';
import { SubscriberModel } from './subscriber.model';

@Injectable()
export class SubscribersRepository extends MongoRepository<Subscriber> {
  constructor(
    @InjectModel(SubscriberModel.name) protected readonly model: Model<Subscriber>,
  ) {
    super(Subscriber);
  }

  @ToEntity()
  public async findByEmail(email: string): Promise<Subscriber> {
    return this.model.findOne({ email }).exec();
  }
}
