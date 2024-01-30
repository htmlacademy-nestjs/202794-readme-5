import { RabbitConfigPart } from '@project/libs/config/rabbit';
import { MongoConfigPart } from '@project/libs/config/mongo';
import { AppNotifyConfigPart } from './app-notify.config';
import { MailNotifyConfigPart } from './mail-notify.config';

export interface ConfigNotify extends
  AppNotifyConfigPart,
  MongoConfigPart,
  MailNotifyConfigPart,
  RabbitConfigPart {}
