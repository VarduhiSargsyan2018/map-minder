import { IsNotEmpty} from "@nestjs/class-validator";

export class AdminLoginDto {
    @IsNotEmpty()
    email: string
    
    @IsNotEmpty()
    password: string
}