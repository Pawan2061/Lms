import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto } from './dto/signup.dto';


@Injectable()
export class AuthService {
    constructor(
        private prisma:PrismaService,

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
                    ...user,
                    password:hash
                }
            }
        } catch (error) {
            return error.message
            
        }

        
    }


    
}
