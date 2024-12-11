import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum roles {
  ADMIN = 'admin',
  MANAGER = 'manager',
  USER = 'user',
}

export type user = HydratedDocument<userDetails>;
@Schema()
export class userDetails {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ rquired: true })
  role: roles;
}

export const userSchema = SchemaFactory.createForClass(userDetails);
