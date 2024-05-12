import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from './dto/addCourse.dto';

@Injectable()
export class CoursesService {
    constructor(private readonly prisma:PrismaService){}


    async addCourse(dto:CreateCourseDto,user:any):Promise<string>{
        console.log(user.userId);
        
        


        const Course=await this.prisma.course.create({
           
         
                 
            data:{
                name:dto.name,
                description:dto.description,
                students:{
                   
                    connect:{
                        id:user.userId
                    }
                    
                    



                    
                    
                 
                }

            }
        })

        return `${Course.name}is added`



    }

    async getCourses():Promise<Object>{
        try {
             const courses=await this.prisma.course.findMany()

             if(!courses){
                throw new error("No courses found")
                
             }

             
             

        return {
            courses:courses
        }
        
            
        } catch (error) {
            return  error.message
            
        }

       































    }
}


