import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post, Body, Param } from '@nestjs/common';
import { CreatePostDto } from './dto/create.post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('create')
  async create(@Body() createPostDto: CreatePostDto): Promise<any> {
    try {
      return this.postsService.create(createPostDto);
    } catch (err) {
      throw new err(HttpStatus.FORBIDDEN);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    try {
      return this.postsService.delete(id);
    } catch (err) {
      throw new err();
    }
  }

  @Get()
  async get(): Promise<any> {
    try {
      return this.postsService.get();
    } catch (err) {
      throw new err();
    }
  }
}
