import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private postModel: Model<Post>,
  ) {}

  async create(dto: CreatePostDto) {
    return this.postModel.create(dto);
  }

  async findAll(page = 1, limit = 5) {
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.postModel.find().sort({ createdAt: -1 }).skip(skip).limit(limit),

      this.postModel.countDocuments(),
    ]);

    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  async findOne(id: string) {
    const post = await this.postModel.findById(id);
    if (!post) throw new NotFoundException('Post no encontrado');
    return post;
  }

  async update(id: string, dto: UpdatePostDto) {
    const post = await this.postModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    if (!post) throw new NotFoundException('Post no encontrado');
    return post;
  }

  async remove(id: string) {
    const post = await this.postModel.findByIdAndDelete(id);
    if (!post) throw new NotFoundException('Post no encontrado');
    return post;
  }

  async bulkCreate(posts: CreatePostDto[]) {
    return this.postModel.insertMany(posts);
  }
}
