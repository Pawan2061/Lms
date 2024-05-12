import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Public } from 'src/common/public.decorator';
import { FeedbackDto } from 'src/feedback/dto/feedback.dto';
import { RolesGuard } from 'src/guards/admin.guard';
import { CurrentUser } from 'src/guards/user.guard';
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





    

    addCourse(@Param('id',ParseIntPipe) id:number,@CurrentUser() user:User ){
        console.log(user);
        
        // console.log(user.id);
        
    
        return this.courseService.addCourse(id,user)

    }
    
    @UseGuards(JwtAuthGuard,RolesGuard)
  

    @Delete('/:id')
    deleteCourse(@Param('id' ,ParseIntPipe) id:number){
        return this.courseService.deleteCourse(id)
    }

    @Put('/review/:id')

    courseReview(@Body() dto:FeedbackDto,@Param('id',ParseIntPipe) id:number,@CurrentUser() user:User){
        console.log(id);
        

        console.log(user.id);

        return this.courseService.courseFeedback(dto,id,user.id)
        

    }


   


}

