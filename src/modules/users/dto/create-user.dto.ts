import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
      @IsNotEmpty({message :" Username cannot be blank"})
      full_name: string;

      @IsNotEmpty({message :" Username cannot be blank"})
      username: string;

      @IsNotEmpty({message :" Email cannot be blank"})
      @IsEmail({}, {message : 'Invalid email'})
      email: string;

      @IsNotEmpty({message : 'Invalid password'})
      password: string;

      
      phone: string;
}
