import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { IFile } from '@project/libs/shared/types';

@Schema({
  collection: 'files',
  timestamps: true,
})
export class FileModel extends Document implements IFile {
  public id: string;

  @Prop()
  public createdAt: Date;

  @Prop()
  public updatedAt: Date;

  @Prop({ required: true })
  public hash: string;

  @Prop({ required: true })
  public mimetype: string;

  @Prop({ required: true })
  public name: string;

  @Prop({ required: true })
  public ext: string;

  @Prop({ required: true })
  public path: string;

  @Prop({ required: true })
  public src: string;

  @Prop({ required: true })
  public size: number;
}

export const FileSchema = SchemaFactory.createForClass(FileModel);
