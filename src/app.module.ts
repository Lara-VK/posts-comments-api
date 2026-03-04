import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { AppController } from './app.controller';

@Module({
  imports: [
MongooseModule.forRoot('mongodb+srv://admin:Admin123@cluster0.12kbmzq.mongodb.net/postsdb?retryWrites=true&w=majority'),
    PostsModule,
    CommentsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}