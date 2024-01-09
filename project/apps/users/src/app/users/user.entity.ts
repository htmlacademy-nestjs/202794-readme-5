import type { IAuthUser } from '@project/libs/shared/types';
import type { IEntity } from '@project/libs/shared/core'

export class User implements IAuthUser, IEntity {
  public id: string;
  public createdAt: Date;
  public updatedAt: Date;
  public email: string;
  public firstname: string;
  public lastname: string;
  public avatar?: string;
  public passwordHash: string;
}
