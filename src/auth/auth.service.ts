import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';


@Injectable()
export class AuthService {
    constructor(
        private prisma:PrismaService,
        private jwtService:JwtService

    ){}
    async signUp(dto:SignupDto):Promise<object>{
        try {

            const hash=await bcrypt.hash(dto.password,10)
            const user=await this.prisma.user.create({
                data:{
                    id:dto.id,
                    email:dto.email,
                    password:dto.password,
                    username:dto.username
                }
            })
            return {
                message:{
                   id:user.id,
                   email:user.email,
                   username:user.email
                    
                }
            }
        } catch (error) {
            return error.message
            
        }

        
    }


    async login(dto:LoginDto):Promise<Object>{


        try {
            const student=await this.prisma.user.findFirst({
                where:{
                    username:dto.username
                }
            })

            if(!student){
                throw new ForbiddenException('credentials incorrect')

            }

            const payload = { sub: student.id, username: student.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };



        
             

            
        } catch (error) {
            return error.message
            
        }

    }

   

    
}
