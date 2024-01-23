import { Controller } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { RabbitExchange, RabbitQueue, RabbitRouting } from '@project/libs/shared/types';
import { SubscribeUserDto, SingupUserDto, PublishPostDto } from '@project/libs/notify/publish';
import { MailsService } from '../mails/mails.service';
import { SubscribersService } from '../subscribers/subscribers.service';

@Controller()
export class SubscribeController {
  constructor(
    private readonly mailsService: MailsService,
    private readonly subscribersService: SubscribersService,
  ) {}

  @RabbitSubscribe({
    exchange: RabbitExchange.Notify,
    routingKey: RabbitRouting.UserSubscribe,
    queue: RabbitQueue.NotifyIcome,
  })
  public async onSubscribeUser(dto: SubscribeUserDto) {
    await this.subscribersService.subscribe(dto);
    await this.mailsService.sendUserSubscriptionMail(dto);
  }

  @RabbitSubscribe({
    exchange: RabbitExchange.Notify,
    routingKey: RabbitRouting.UserSingup,
    queue: RabbitQueue.NotifyIcome,
  })
  public async onSingupUser(dto: SingupUserDto) {
    await this.mailsService.sendUserSingupMail(dto);
  }


  @RabbitSubscribe({
    exchange: RabbitExchange.Notify,
    routingKey: RabbitRouting.PostsPublished,
    queue: RabbitQueue.NotifyIcome,
  })
  public async onPublishPost(dto: PublishPostDto) {}
}
