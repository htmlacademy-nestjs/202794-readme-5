import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { IToken } from '@project/libs/shared/types';

@Schema({
  collection: 'refresh-tokens',
  timestamps: true,
})
export class RefreshTokenModel extends Document implements IToken {
  public id: string;

  @Prop({ required: true })
  public tokenId: string;

  @Prop()
  public createdAt: Date;

  @Prop()
  public updatedAt: Date;

  @Prop({ required: true })
  public userId: string;

  @Prop({ required: true })
  public expiresIn: Date;
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshTokenModel);
