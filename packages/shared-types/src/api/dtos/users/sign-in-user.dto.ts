import { IsNotEmpty, IsObject } from "class-validator";

import { UserIdentifier } from "../../../user";

export class SignInUserDto {
  @IsObject()
  identifier: UserIdentifier;

  @IsNotEmpty()
  password: string;
}
