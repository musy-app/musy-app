import { IsNotEmpty, IsObject } from "class-validator";

export class SignInUserDto {
  @IsObject()
  identifier: {
    [key: string]: string;
  };

  @IsNotEmpty()
  password: string;
}
