import { Module } from '@nestjs/common';
import { RabbitModule } from '@project/libs/config/rabbit';
import { PublishService } from './publish.service';

@Module({
  imports: [RabbitModule],
  providers: [PublishService],
  exports: [PublishService],
})
export class PublishModule {}
