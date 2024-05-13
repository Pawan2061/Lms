import { Injectable } from '@nestjs/common';
import { FeedbackDto } from 'src/feedback/dto/feedback.dto';
import { FeedbackService } from 'src/feedback/feedback.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubjectDto } from './dto/createsubject.dto';
import { UpdateSubjectDto } from './dto/updateSubject.dto';

@Injectable()
export class SubjectService {
    constructor(private prismaService:PrismaService,
        private feedback:FeedbackService){}

    async createSubject(dto:CreateSubjectDto):Promise<Object>{

        console.log(dto);
        
        try {
            const subject=await this.prismaService.subject.create({data:{
            title:dto.title,
            id:dto.id,
            courseId:dto.courseId
            
        }


       
        


    
    }


    
    
    )

    console.log(subject);

    return {
        newSubject:subject
    }
    
        
            
        } catch (error) {
            return error.message
            
        }
       



    }

    async updateSubject(subjectId:number,dto:UpdateSubjectDto):Promise<Object>{

        const subject=await this.prismaService.subject.update({
            where:{
                id:subjectId
            },data:{
                title:dto.title,
                courseId:dto.courseId
            }
        })
        return {
            message:`${subject.title} is updated`
        }

    }

    async getSubjects():Promise<Object>{

        try {
             const subjects=await this.prismaService.subject.findMany()
        if(!subjects){
            return "no subjects found"

        }

        return {
            subjectForViewing:subjects


        }
            
        } catch (error) {
            return{
                error:error.message
            }
            
        }
       
    }
    async deleteSubject(id:number):Promise<String>{
        try {
            const subject=await this.prismaService.subject.delete({
                where:{
                    id:id
                }
            })

            return `${subject.title} is deleted`
            
        } catch (error) {
            return error.message
            
        }
        
    }

       async courseFeedback(dto:FeedbackDto,courseId:number,userId:number){
        const review=await this.feedback.addReview(dto,courseId,userId)


        return review
        

    }
}
