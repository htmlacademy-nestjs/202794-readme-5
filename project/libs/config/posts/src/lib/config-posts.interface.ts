import { RabbitConfigPart } from '@project/libs/config/rabbit';
import { AppPostsConfigPart } from './app-posts.config';

export interface ConfigPosts extends
  AppPostsConfigPart,
  RabbitConfigPart {}
