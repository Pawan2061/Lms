import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Public } from 'src/common/public.decorator';
import { FeedbackDto } from 'src/feedback/dto/feedback.dto';
import { RolesGuard } from 'src/guards/admin.guard';
import { CurrentUser } from 'src/guards/user.guard';
import { IUser } from 'src/interface/jwt_user';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/addCourse.dto';

@Controller('courses')
export class CoursesController {
    constructor(private courseService:CoursesService){}



    @Post('')
    @UseGuards(JwtAuthGuard,RolesGuard)

    createCourse(@Body() dto:CreateCourseDto){
        return this.courseService.createCourse(dto)

    }

   

    @Public()
    @Get()
    getCourses(){
        
        return this.courseService.getCourses()
    }



    @Patch('/:id')





    

    addCourse(@Param('id',ParseIntPipe) id:number,@CurrentUser() user: User ){
        console.log('helo wllo')

        console.log(user);
        console.log('helo wllo')

        
        // console.log(user.id);
        
    
        return this.courseService.addCourse(id,user)

    }
    
    @UseGuards(JwtAuthGuard,RolesGuard)
  

    @Delete('/:id')
    deleteCourse(@Param('id' ,ParseIntPipe) id:number){
        return this.courseService.deleteCourse(id)
    }

    @Post('/review/:id')

    courseReview(@Body() dto:FeedbackDto,@CurrentUser() user:IUser,@Param('id',ParseIntPipe) id:number){

        console.log(user.username);
        
       
        
        
        

        

        return this.courseService.courseFeedback(dto,id,user.id)
        

    }

    @Get('/reviews/"id')
    getReviews(@Param('id',ParseIntPipe)id:number){

        return this.courseService

    }



   


}

