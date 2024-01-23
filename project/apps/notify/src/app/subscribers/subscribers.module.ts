import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscribersService } from './subscribers.service';
import { SubscribersController } from './subscribers.controller';
import { SubscriberModel, SubscriberSchema } from './subscriber.model';
import { SubscribersRepository } from './subscribers.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SubscriberModel.name, schema: SubscriberSchema },
    ]),
  ],
  controllers: [SubscribersController],
  providers: [SubscribersRepository, SubscribersService],
  exports: [SubscribersRepository, SubscribersService],
})
export class SubscribersModule {}
