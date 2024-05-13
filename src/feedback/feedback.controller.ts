import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Public } from 'src/common/public.decorator';
import { CurrentUser } from 'src/guards/user.guard';
import { IUser } from 'src/interface/jwt_user';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
    constructor(private feedbackServices:FeedbackService){}
    @Public()
    @Get('course/:id')

    getReviewsByCourse(@Param('id',ParseIntPipe)id:number){

        return this.feedbackServices.getReviewByCourse(id)

    }
    @Delete('/course/:id')
    deleteCourseReview(@Param('id',ParseIntPipe)id:number,@CurrentUser() user:IUser){

        return this.feedbackServices.deleteReviewByCourse(id,user.id)


    }
    

}
