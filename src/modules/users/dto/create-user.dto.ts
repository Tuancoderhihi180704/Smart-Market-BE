import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
      @IsNotEmpty({message :" Name cannot be blank"})
      username: string;

      @IsNotEmpty({message : 'Invalid password'})
      password: string;

      @IsNotEmpty({message: 'please enter full name'})
      full_name: string;

      @IsNotEmpty({message :" Email cannot be blank"})
      @IsEmail({}, {message : 'Invalid email'})
      email: string;


      phone: string;
}
