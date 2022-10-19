import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class CreateContactUsDto {

   @IsNotEmpty()
   @MinLength(4)
   @MaxLength(60)
   name:string

   @IsNotEmpty()
   @IsEmail()
   email:string

   @IsNotEmpty()
   @MinLength(6)
   @MaxLength(20)
   phone:string

   @IsNotEmpty()
   @MinLength(6)
   @MaxLength(20)
   textmsg:string
   
   @IsNotEmpty()
   @MinLength(6)
   @MaxLength(20)
   id_profession:number;
 
   @IsNotEmpty()
   @MinLength(6)
   @MaxLength(20)
   password:string

}



