import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { ISubscriber } from '@project/libs/shared/types';

@Schema({
  collection: 'subscribers',
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class SubscriberModel extends Document implements ISubscriber {
  public id: string;

  @Prop({ required: true, unique: true })
  public email: string;

  @Prop({ required: true })
  public firstname: string;

  @Prop({ required: true })
  public lastname: string;
}

export const SubscriberSchema = SchemaFactory.createForClass(SubscriberModel);
