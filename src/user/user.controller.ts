import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserPostDto } from './dto/post/user.post.dto';
import { Body, Controller, Inject, Post, ValidationPipe } from '@nestjs/common';

@Controller('user')
export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  @Post()
  userRegist(@Body(ValidationPipe) userPostDto: UserPostDto): Promise<User> {
    const result = this.userService.userRegist(userPostDto);
    return result;
  }
}
