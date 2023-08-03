import { IsString, IsEmail, IsMobilePhone } from 'class-validator';

export class CreateContactDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsMobilePhone()
  phone: string;
}
