import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { access, postType } from '../schema/post.schema';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsEnum(postType, { message: 'please select proper type' })
  type: postType;

  @IsNotEmpty()
  @IsEnum(access, { message: 'please select proper access type' })
  access: access;
}
