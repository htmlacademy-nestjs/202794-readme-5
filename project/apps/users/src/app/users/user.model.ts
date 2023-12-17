import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { IAuthUser } from '@project/libs/shared/types';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class UserModel extends Document implements IAuthUser {
  @Prop({ unique: true, required: true })
  public email: string;

  @Prop({ required: true })
  public firstname: string;

  @Prop()
  public avatar?: string;

  @Prop({ required: true })
  public passwordHash: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
