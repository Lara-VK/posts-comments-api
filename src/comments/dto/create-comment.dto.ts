import { IsString, IsEmail } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  postId: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  body: string;
}