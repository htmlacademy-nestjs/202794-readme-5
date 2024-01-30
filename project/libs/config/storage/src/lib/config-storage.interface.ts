import { MongoConfigPart } from '@project/libs/config/mongo';
import { AppStorageConfigPart } from './app-storage.config';

export interface ConfigStorage extends
  AppStorageConfigPart,
  MongoConfigPart {}
