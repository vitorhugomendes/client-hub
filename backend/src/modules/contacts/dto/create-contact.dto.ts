import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateContactDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsPhoneNumber('BR')
  phone: string;
}
