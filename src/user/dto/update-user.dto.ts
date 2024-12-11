import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { roles } from '../schemas/user.schema';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  name?: string;
  username?: string;
  password?: string;
  role?: roles;
}
