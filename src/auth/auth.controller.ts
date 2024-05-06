import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/common/public.decorator';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Public()
    
    @Post('signup')
    signup(@Body() dto:SignupDto){
        return this.authService.signUp(dto)

    }


    @Public()

    @Post('login')
    login(@Body () dto:LoginDto){
        return this.authService.login(dto)
    }






}
