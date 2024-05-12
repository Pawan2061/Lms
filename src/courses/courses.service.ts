import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { FeedbackDto } from 'src/feedback/dto/feedback.dto';
import { FeedbackService } from 'src/feedback/feedback.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from './dto/addCourse.dto';

@Injectable()
export class CoursesService {
    constructor(private readonly prisma:PrismaService,
        private readonly feedback:FeedbackService){}

    async createCourse(dto:CreateCourseDto):Promise<Object>{
        console.log(dto);
        

        const newCourse=await  this.prisma.course.create({
            data:{
                description:dto.description,
                id:dto.id,
                name:dto.name

            }
        })

        return {
            newCourse:newCourse
        }
    }


    async addCourse(id:number,user:any):Promise<string>{
        console.log(user.userId);

        const course=await this.prisma.course.update({
            where:{
                id:id

            },data:{
                students:{
                    connect:{
                        id:user.userId,

                    
                    }
                
                },
               
                
            }
        })



      

        
        


       

        return `${course.name} is added to the ${user.name}`



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

    async deleteCourse(id:number):Promise<string>{
        const course=await this.prisma.course.delete({
            where:{
                id:id

            }
        })
        return `${course.name} is deleted`

    }

    async courseFeedback(dto:FeedbackDto,courseId:number,userId:number){
        const review=await this.feedback.addReview(dto,courseId,userId)


        return review
        

    }
}


