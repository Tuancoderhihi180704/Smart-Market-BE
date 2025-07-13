import { IsMongoId, IsNotEmpty, IsOptional } from "class-validator";


export class UpdateUserDto {
      @IsMongoId({message:'_id không hợp lệ'})
      @IsNotEmpty({message: '_id không được để trống'})
     _id: string;
      
     @IsOptional()
      username: string;

      @IsOptional()
      password: string;
      
      @IsOptional()
      full_name: string;
      
      @IsOptional()
      email: string;
      
      @IsOptional()
      phone: string;

}
