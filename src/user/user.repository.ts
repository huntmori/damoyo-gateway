import { LocalDateTime } from '@js-joda/core';
import { User } from './entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserPostDto } from './dto/post/user.post.dto';
import * as bcrypt from 'bcryptjs';
import { InternalServerErrorException } from '@nestjs/common';
import { randomUUID } from 'crypto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async userCreate(userPostDto: UserPostDto): Promise<User> {
    const { userId, email, password } = userPostDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const entity = this.create({
      uuid: randomUUID().toUpperCase(),
      userId: userId,
      email: email,
      password: hashedPassword,
      createdAt: LocalDateTime.now().toString(),
      updatedAt: LocalDateTime.now().toString(),
    });

    try {
      await this.save(entity);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }

    return entity;
  }
}
