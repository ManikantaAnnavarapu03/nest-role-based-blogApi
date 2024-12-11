import { IsEmpty, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { roles } from '../schemas/user.schema';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(roles, { message: 'please select proper role' })
  role: roles;
}
