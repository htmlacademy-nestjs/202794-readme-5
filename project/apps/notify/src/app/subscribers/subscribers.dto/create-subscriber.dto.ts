import { IsUserEmail, IsUserName } from '@project/libs/shared/helpers';
import { ISubscriber } from '@project/libs/shared/types'

export class CreateSubscriberDto implements ISubscriber {
  @IsUserEmail()
  public email: string;

  @IsUserName()
  public firstname: string;

  @IsUserName()
  public lastname: string;
}
