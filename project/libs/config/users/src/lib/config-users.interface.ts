import { RabbitConfigPart } from '@project/libs/config/rabbit';
import { AppUsersConfigPart } from './app-users.config';
import { DBUsersConfigPart } from './db-users.config';
import { JwtUsersConfigPart } from './jwt-users.config';

export interface ConfigUsers extends
  AppUsersConfigPart,
  DBUsersConfigPart,
  JwtUsersConfigPart,
  RabbitConfigPart {}
