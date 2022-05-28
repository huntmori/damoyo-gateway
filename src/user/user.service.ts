import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UserPostDto } from './dto/post/user.post.dto';

@Injectable()
export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async userRegist(userPostDto: UserPostDto): Promise<User> {
    const user = await this.userRepository.userCreate(userPostDto);
    return user;
  }
}
