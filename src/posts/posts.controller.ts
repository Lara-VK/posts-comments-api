import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiResponse } from '../common/responses/api-response';
import { Query } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(@Query('page') page = 1, @Query('limit') limit = 5) {
    const result = await this.postsService.findAll(Number(page), Number(limit));

    return ApiResponse.success(result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const post = await this.postsService.findOne(id);
    return ApiResponse.success(post);
  }

  @Post()
  async create(@Body() dto: CreatePostDto) {
    const post = await this.postsService.create(dto);
    return ApiResponse.success(post, 'Post creado correctamente');
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    const post = await this.postsService.update(id, dto);
    return ApiResponse.success(post, 'Post actualizado');
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const post = await this.postsService.remove(id);
    return ApiResponse.success(post, 'Post eliminado');
  }

  // 🔥 ENDPOINT BULK OBLIGATORIO
  @Post('bulk')
  async bulkCreate(@Body() dto: CreatePostDto[]) {
    const posts = await this.postsService.bulkCreate(dto);
    return ApiResponse.success(posts, 'Posts creados correctamente');
  }
}
