import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { userDetails } from './schemas/user.schema';
import mongoose from 'mongoose';
import { LoginUserDto } from './dto/login.user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(userDetails.name)
    private usermodel: mongoose.Model<userDetails>,
  ) {}
  create(createUserDto: CreateUserDto) {
    try {
      return this.usermodel.create(createUserDto);
    } catch (err) {
      throw new err();
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try{
      const data: Promise<object[]> = await this.usermodel.find({ username: loginUserDto.username });
      if(!data) {
        return "data not found"
      }
      const 
      } catch (err) {
        throw new NotFoundException();
      }
    }
  }

  findAll() {
    return this.usermodel.find({}, '-password');
  }

  findOne(id: number) {
    return this.usermodel.findById({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
