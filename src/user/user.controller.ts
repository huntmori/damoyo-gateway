import { UserPostDto } from './dto/post/user.post.dto';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  userRegister(@Body(ValidationPipe) userPostDto: UserPostDto): string {
    return 'ok';
  }
}
