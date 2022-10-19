import { IsNotEmpty } from "class-validator"

export class AuthAdmin {
    
        @IsNotEmpty()
        username: string
        
        @IsNotEmpty()
        password: string
    
}
