import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
    constructor(private prisma:PrismaService) {}

    
    

    async getUsers():Promise<Object>{
        try {
            const Users=await this.prisma.user.findMany()
            if(!Users){
                return {
                    message:"no users found"

                }
            }
            return {
                users:Users
            }
            
        } catch (error) {
            return{
                message:error.message
            }
        }
    }

    async getUserById(id:number){
        try {
            
            const User=await this.prisma.user.findFirst({
                where:{
                    id:id

                }
            })

            return {
                message:User
            }
        } catch (error) {
            return {
                message:error.message
            }
            
        }
    }

    async updateEmail(dto:UpdateUserDto):Promise<Object>{
        try {

            const User=await this.prisma.user.findFirst({
                where:{
                    username:dto.username

                }
            })



             const newStudent=await this.prisma.user.update({
                where:{
                    username:dto.username
                },
                data:{
                    email:dto.email
                }
            })
            console.log("reached here");
            

            console.log(newStudent);
            
            return {
                message:`${newStudent.email} is updated`
            }
        } catch (error) {
            return error.message
            
        }

    }



}
