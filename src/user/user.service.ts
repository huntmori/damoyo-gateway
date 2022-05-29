import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserPostDto } from './dto/post/user.post.dto';
import { UserLoginDto } from './dto/post/user.login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  private userRepository: UserRepository;
  private jwtService: JwtService;

  constructor(userRepository: UserRepository, jwtService: JwtService) {
    this.userRepository = userRepository;
    this.jwtService = jwtService;
  }

  async userRegist(userPostDto: UserPostDto): Promise<User> {
    const user = await this.userRepository.userCreate(userPostDto);
    return user;
  }

  async userLogin(userLoginDto: UserLoginDto) {
    const { userId, email, password } = userLoginDto;
    let user = null;
    if (userId && userId !== '') {
      user = await this.userRepository.findOne({ userId });
    } else if (email && email !== '') {
      user = await this.userRepository.findOne({ email });
    }

    // if (user && (await bcrypt.compare(password, user.password))) {}
  }

  async createUserToken(user: User): Promise<string> {
    if (user) {
      const userId = user.userId;
      const payload = { userId };
      const accessToken = await this.jwtService.sign(payload, {
        secret: process.env.PASSWORD_HASH_KEY,
      });

      return accessToken;
    } else {
      throw new NotFoundException('user not found or password wrong');
    }
  }
}
