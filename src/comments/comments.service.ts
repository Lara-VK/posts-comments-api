import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private commentModel: Model<Comment>,
  ) {}

  async create(dto: CreateCommentDto) {
    return this.commentModel.create(dto);
  }

  async findByPostId(postId: string) {
    return this.commentModel
      .find({ postId })
      .sort({ createdAt: -1 });
  }

  async remove(id: string) {
    const comment = await this.commentModel.findByIdAndDelete(id);
    if (!comment)
      throw new NotFoundException('Comentario no encontrado');

    return comment;
  }
}