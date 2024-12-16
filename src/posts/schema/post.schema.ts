import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum postType {
  PHOTO = 'photo',
  REEL = 'reel',
}

export enum access {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export type user = HydratedDocument<PostDetails>;
@Schema({ timestamps: true })
export class PostDetails {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, unique: true })
  url: string;

  @Prop({ required: true })
  type: postType;

  @Prop({ rquired: true })
  access: access;
}

export const postSchema = SchemaFactory.createForClass(PostDetails);
