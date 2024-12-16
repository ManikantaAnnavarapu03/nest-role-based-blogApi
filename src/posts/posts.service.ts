import { HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create.post.dto';
import { PostDetails } from './schema/post.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostDetails.name)
    private postmodel: mongoose.Model<PostDetails>,
  ) {}
  async create(createPostDto: CreatePostDto): Promise<any> {
    try {
      return this.postmodel.create(createPostDto);
    } catch (err) {
      throw new err(HttpStatus.FORBIDDEN);
    }
  }

  delete(id: string) {
    try {
      return this.postmodel.deleteOne({ _id: id });
    } catch (err) {
      throw new err();
    }
  }

  get() {
    try {
      return this.postmodel.find({});
    } catch (err) {
      throw new err();
    }
  }
}
