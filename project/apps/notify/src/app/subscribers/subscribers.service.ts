import { Injectable } from '@nestjs/common';
import { SubscribersRepository } from './subscribers.repository';
import { CreateSubscriberDto } from './subscribers.dto/create-subscriber.dto';

@Injectable()
export class SubscribersService {
  constructor(
    private readonly subscribersRepository: SubscribersRepository,
  ) {}

  public async findAll() {
    return this.subscribersRepository.findAll();
  }

  public async subscribe(dto: CreateSubscriberDto) {
    const subscriber = await this.subscribersRepository.findByEmail(dto.email);

    if (subscriber) {
      return subscriber;
    }
    return this.subscribersRepository.create(dto);
  }
}
