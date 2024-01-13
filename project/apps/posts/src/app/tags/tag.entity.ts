import { IPostTag } from '@project/libs/shared/types';

export class Tag implements IPostTag {
  public id?: string;
  public createdAt: Date;
  public updatedAt: Date;
  public text: string;
}
