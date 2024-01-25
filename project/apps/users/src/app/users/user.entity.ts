import { Expose } from 'class-transformer';
import { matchPassword } from '@project/libs/shared/helpers';
import type { IAuthUser } from '@project/libs/shared/types';
import type { IEntity } from '@project/libs/shared/core';

export class User implements IAuthUser, IEntity {
  @Expose()
  public id: string;

  @Expose()
  public createdAt: Date;

  @Expose()
  public updatedAt: Date;

  @Expose()
  public email: string;

  @Expose()
  public firstname: string;

  @Expose()
  public lastname: string;

  @Expose()
  public avatar?: string;

  @Expose()
  public passwordHash: string;

  public async matchPassword(password: string) {
    return matchPassword(password, this.passwordHash);
  }
}
