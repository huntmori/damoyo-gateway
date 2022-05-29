import { UserLoginDto } from './dto/post/user.login.dto';
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

  @Post('/reigst')
  userRegist(@Body(ValidationPipe) userPostDto: UserPostDto): Promise<User> {
    const result = this.userService.userRegist(userPostDto);
    return result;
  }

  @Post('/login')
  userLogin(@Body(ValidationPipe) userLoginDto: UserLoginDto): void {
    const reulst = this.userService.userLogin(userLoginDto);
    console.log('user.login');
  }
}
