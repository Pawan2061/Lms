import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { Public } from 'src/common/public.decorator';
import { CurrentUser } from 'src/guards/user.guard';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/addCourse.dto';

@Controller('courses')
export class CoursesController {
    constructor(private courseService:CoursesService){}

@Post('')





    

    addCourse(@Body() dto:CreateCourseDto,@CurrentUser() user:User ){
        console.log(user);
        
        // console.log(user.id);
        
    
        return this.courseService.addCourse(dto,user)

    }
    @Public()
    @Get()
    getCourses(){
        
        return this.courseService.getCourses()
    }

}
// function CurrentUser(): (target: CoursesController, propertyKey: "addCourse", parameterIndex: 1) => void {
//     throw new Error('Function not implemented.');
// }

