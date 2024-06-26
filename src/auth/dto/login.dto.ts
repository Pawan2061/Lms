import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDto{
    @IsNotEmpty()
    username:string


    @IsNotEmpty()
    @IsEmail()
    email:string


    @IsNotEmpty()
    password:string
}