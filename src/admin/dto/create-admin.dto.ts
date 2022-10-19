import { IsNotEmpty, IsEmail, MinLength, MaxLength } from "@nestjs/class-validator";
import { Unique } from "typeorm";

export class CreateAdminDto {

    @MinLength(4)
    @MaxLength(10)
    status:string

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(60)
    name:string

    @IsNotEmpty()
    @Unique('email-unique', ['email'])
    @IsEmail()
    email:string

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password:string


}
