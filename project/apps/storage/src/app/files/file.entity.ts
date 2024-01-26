import { Expose } from 'class-transformer';
import type { IEntity } from '@project/libs/shared/core';
import { IFile } from '@project/libs/shared/types';

export class File implements IEntity, IFile {
  @Expose()
  public id: string;

  @Expose()
  public createdAt: Date;

  @Expose()
  public hash: string;

  @Expose()
  public mimetype: string;

  @Expose()
  public name: string;

  @Expose()
  public ext: string;

  @Expose()
  public path: string;

  @Expose()
  public src: string;

  @Expose()
  public size: number;
}
