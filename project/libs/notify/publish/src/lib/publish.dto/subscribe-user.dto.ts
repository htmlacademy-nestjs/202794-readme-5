import { ISubscriber } from '@project/libs/shared/types';

export class SubscribeUserDto implements ISubscriber {
  public email: string;
  public firstname: string;
  public lastname: string;
}
