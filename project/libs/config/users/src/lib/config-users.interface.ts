import { RabbitConfigPart } from '@project/libs/config/rabbit';
import { MongoConfigPart } from '@project/libs/config/mongo';
import { AppUsersConfigPart } from './app-users.config';
import { JwtUsersConfigPart } from './jwt-users.config';

export interface ConfigUsers extends
  AppUsersConfigPart,
  MongoConfigPart,
  JwtUsersConfigPart,
  RabbitConfigPart {}
