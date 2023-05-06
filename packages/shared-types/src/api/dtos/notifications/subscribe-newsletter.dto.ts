import { IsEmail } from "class-validator";

export class SubscribeNewsletterDto {
  @IsEmail()
  email: string;
}
