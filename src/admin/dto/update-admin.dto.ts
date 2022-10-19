import { IsEmail, IsNotEmpty, IsPhoneNumber, MaxLength, MinLength } from 'class-validator';
import { Unique } from 'typeorm';

export class UpdateAdminDto {

    @MinLength(4)
    @MaxLength(10)
    status:string
    
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(60)
    name:string

    @IsNotEmpty()
    @Unique('email-uniqwe', ['email'])
    @IsEmail()
    email:string

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password:string

}
