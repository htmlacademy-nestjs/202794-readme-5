import { RabbitConfigPart } from '@project/libs/config/rabbit';
import { AppNotifyConfigPart } from './app-notify.config';
import { DBNotifyConfigPart } from './db-notify.config';
import { MailNotifyConfigPart } from './mail-notify.config';

export interface ConfigNotify extends
  AppNotifyConfigPart,
  DBNotifyConfigPart,
  MailNotifyConfigPart,
  RabbitConfigPart {}
