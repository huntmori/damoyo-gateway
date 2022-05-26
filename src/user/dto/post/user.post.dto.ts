import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserPostDto {
  @IsString()
  @MinLength(5, {
    message: 'userId minimum length: 5',
  })
  userId: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsString()
  @MinLength(6, {
    message: 'password minimum lenght: 6',
  })
  password: string;
}
