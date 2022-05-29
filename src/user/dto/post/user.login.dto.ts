import { IsNotEmpty, IsString } from 'class-validator';

export class UserLoginDto {
  userId: string;
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
