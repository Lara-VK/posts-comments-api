import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ApiResponse } from '../common/responses/api-response';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  // 🔥 GET /comments?postId={id}
  @Get()
  async findByPost(@Query('postId') postId: string) {
    const comments = await this.commentsService.findByPostId(postId);
    return ApiResponse.success(comments);
  }

  @Post()
  async create(@Body() dto: CreateCommentDto) {
    const comment = await this.commentsService.create(dto);
    return ApiResponse.success(comment, 'Comentario creado');
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const comment = await this.commentsService.remove(id);
    return ApiResponse.success(comment, 'Comentario eliminado');
  }
}