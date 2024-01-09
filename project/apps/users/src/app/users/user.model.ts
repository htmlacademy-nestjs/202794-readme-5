import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { IAuthUser } from '@project/libs/shared/types';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class UserModel extends Document implements IAuthUser {
  public id: string;

  @Prop({ unique: true, required: true })
  public email: string;

  @Prop({ required: true })
  public passwordHash: string;

  @Prop()
  public createdAt: Date;

  @Prop()
  public updatedAt: Date;

  @Prop()
  public firstname: string;

  @Prop()
  public lastname: string;

  @Prop()
  public avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
