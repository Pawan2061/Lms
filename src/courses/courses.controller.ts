import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Public } from 'src/common/public.decorator';
import { RolesGuard } from 'src/guards/admin.guard';
import { CurrentUser } from 'src/guards/user.guard';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/addCourse.dto';

@Controller('courses')
export class CoursesController {
    constructor(private courseService:CoursesService){}



    @Post('/createCourse')
    @UseGuards(JwtAuthGuard,RolesGuard)

    createCourse(@Body() dto:CreateCourseDto){
        return this.courseService.createCourse(dto)

    }



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

