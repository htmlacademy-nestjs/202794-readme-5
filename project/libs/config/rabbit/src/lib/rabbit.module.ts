import { ConfigService } from '@nestjs/config';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { getRabbitMQConnectionString } from '@project/libs/shared/helpers';
import { RabbitConfigPart } from './rabbit.config';

export const RabbitModule = RabbitMQModule.forRootAsync(RabbitMQModule, {
  useFactory: async (config: ConfigService<RabbitConfigPart>) => {
    return {
      exchanges: [
        { name: config.get('rabbit.exchange', { infer: true }), type: 'direct' }
      ],
      uri: getRabbitMQConnectionString({
        username: config.get('rabbit.user', { infer: true }),
        password: config.get('rabbit.password', { infer: true }),
        host: config.get('rabbit.host', { infer: true }),
        port: config.get('rabbit.port', { infer: true }),
      }),
      connectionInitOptions: { wait: true },
      enableControllerDiscovery: true,
    };
  },
  inject: [ConfigService],
});
