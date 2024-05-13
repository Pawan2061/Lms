import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FeedbackDto } from './dto/feedback.dto';

@Injectable()
export class FeedbackService {
    constructor(private readonly prismaService:PrismaService,
        ){}
    async addReview(dto:FeedbackDto,courseId:number,authorId:number){
        console.log(authorId);
        console.log(courseId);
        
        

        const review=await this.prismaService.feedback.create({
           
               data:{
                text:dto.text,
                rating:dto.rating,
                courseId:courseId,
                authorId:authorId 

               } 

            
        })
        return review
        

    

    }

    async getReviewByCourse(courseId:number):Promise<Object>{
        try {
             const reviews=await this.prismaService.feedback.findMany({where:{
            courseId:courseId
        }})
        return{
            courseReviews:reviews
        }
            
        } catch (error) {
            return {
                message:error.message
            }
            
        }

       
    }

    async deleteReviewByCourse(reviewId:number,userId:number):Promise<String>{

        const review=await this.prismaService.feedback.findFirst({

            where:{
                id:reviewId
                

            }
        })
        console.log(review.text);
        
        const compare= this.sameUser(review.authorId,userId)
        if(compare){
            await this.prismaService.feedback.delete({
                where:{
                    id:review.id
                }
            })
            return ` review id ${review.id} is deleted from the course `
        }

        return "not the authorized user"

        
        
        

        
        return;

    }


    sameUser(authorId:number,userId:number){

        if(authorId===userId){
            return true

        }
        return false

    }

}
