import { IsEmail, IsNotEmpty } from "class-validator";

export class UnsubscribeNewsletterDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  reason: string;
}
