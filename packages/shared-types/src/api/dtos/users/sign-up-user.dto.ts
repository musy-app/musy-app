import { IsNotEmpty, IsObject } from "class-validator";
import { UserIdentity } from "../../../user";

export class SignUpUserDto {
  @IsObject()
  identifier: {
    [key: string]: string;
  };

  @IsNotEmpty()
  password: string;

  @IsObject()
  identity: Partial<UserIdentity> &
    Pick<UserIdentity, "firstName" | "lastName">;
}
