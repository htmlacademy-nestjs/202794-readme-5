export interface ITokenPayload {
  id: string;
  email: string;
}

export interface IRefreshTokenPayload extends ITokenPayload {
  tokenId: string;
}

export interface ITokenParams {
  secret: string;
  expiresIn: string;
}

export interface IToken {
  id?: string;
  tokenId: string;
  createdAt: Date;
  userId: string;
  expiresIn: Date;
}
