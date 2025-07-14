import { IsNotEmpty } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty({ message:"full_name không được để trống"})
    full_name:string;

    @IsNotEmpty({message: "username không được để trống"})
    username: string;
 
    @IsNotEmpty({message: "email không được để trống"})
    email:string;

    @IsNotEmpty({message: 'password không được để trống'})
    password: string;
}
