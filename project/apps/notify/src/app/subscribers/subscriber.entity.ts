import { Expose } from 'class-transformer';
import { ISubscriber } from '@project/libs/shared/types'

export class Subscriber implements ISubscriber {
  @Expose()
  public id: string;

  @Expose()
  public email: string;

  @Expose()
  public firstname: string;

  @Expose()
  public lastname: string;
}
