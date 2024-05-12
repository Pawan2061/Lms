import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
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



    @Post('')
    @UseGuards(JwtAuthGuard,RolesGuard)

    createCourse(@Body() dto:CreateCourseDto){
        return this.courseService.createCourse(dto)

    }



    @Patch('/:id')





    

    addCourse(@Param('id') id:string,@CurrentUser() user:User ){
        console.log(user);
        
        // console.log(user.id);
        
    
        return this.courseService.addCourse(+id,user)

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

