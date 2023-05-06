import { IsNotEmpty, IsObject } from "class-validator";
import { UserIdentifier, UserIdentity } from "../../../user";

export class SignUpUserDto {
  @IsObject()
  identifier: UserIdentifier;

  @IsNotEmpty()
  password: string;

  @IsObject()
  identity: Partial<UserIdentity> &
    Pick<UserIdentity, "firstName" | "lastName">;
}
