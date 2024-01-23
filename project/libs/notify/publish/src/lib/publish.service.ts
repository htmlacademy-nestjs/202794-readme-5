import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { RabbitRouting } from '@project/libs/shared/types';
import { rabbitConfig } from '@project/libs/config/rabbit';
import { PublishPostDto } from './publish.dto/publish-post.dto';
import { SingupUserDto } from './publish.dto/singup-user.dto';
import { SubscribeUserDto } from './publish.dto/subscribe-user.dto';

@Injectable()
export class PublishService {
  constructor(
    private readonly rabbit: AmqpConnection,
    @Inject(rabbitConfig.KEY)
    private readonly config: ConfigType<typeof rabbitConfig>,
  ) {}

  public async publish<T = unknown>(route: string, message: T) {
    return this.rabbit.publish(this.config.exchange, route, message);
  }

  public async notifyUserSingup(dto: SingupUserDto) {
    return this.publish(RabbitRouting.UserSingup, dto);
  }

  public async notifyUserSubscribe(dto: SubscribeUserDto) {
    return this.publish(RabbitRouting.UserSubscribe, dto);
  }

  public async notifyPostPublish(dto: PublishPostDto) {
    return this.publish(RabbitRouting.PostsPublished, dto);
  }
}
