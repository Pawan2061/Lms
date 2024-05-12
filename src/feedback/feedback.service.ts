import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FeedbackDto } from './dto/feedback.dto';

@Injectable()
export class FeedbackService {
    constructor(private readonly prismaService:PrismaService){}
    async addReview(dto:FeedbackDto,courseId:number,userId:number){
        console.log(userId);
        console.log(courseId);
        
        

        const review=await this.prismaService.feedback.upsert({
            where:{
                id:courseId
            },update:{
                text:dto.text,
                rating:+dto.rating,
                courseId:courseId,
                authorId:userId

            },create:{
                text:dto.text,
                rating:dto.rating,
                courseId:courseId,
                authorId:userId

            }
        })
        return review
        

    

    }



}
