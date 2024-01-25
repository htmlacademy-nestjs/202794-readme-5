import type { IToken } from '@project/libs/shared/types';

export class RefreshToken implements IToken {
  public id: string;
  public tokenId: string;
  public createdAt: Date;
  public userId: string;
  public expiresIn: Date;
}
