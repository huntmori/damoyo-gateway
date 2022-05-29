import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private userRepository: UserRepository;

  constructor(
    @InjectRepository(UserRepository)
    userRepository: UserRepository,
  ) {
    super({
      secretOrKey: process.env.PASSWORD_HASH_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
    this.userRepository = userRepository;
  }

  async validate(payload) {
    const { userId } = payload;
    const user: User = await this.userRepository.findOne({ userId });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
