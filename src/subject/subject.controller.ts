import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { Public } from 'src/common/public.decorator';
import { FeedbackDto } from 'src/feedback/dto/feedback.dto';
import { RolesGuard } from 'src/guards/admin.guard';
import { CurrentUser } from 'src/guards/user.guard';
import { IUser } from 'src/interface/jwt_user';
import { CreateSubjectDto } from './dto/createsubject.dto';
import { UpdateSubjectDto } from './dto/updateSubject.dto';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
    constructor(private subjectService:SubjectService ){}
    @UseGuards(RolesGuard)
    @Post()
    createSubject(@Body() dto:CreateSubjectDto){
        console.log(dto);
        
        return this.subjectService.createSubject(dto)




    }
    @Public()
    @Get()
    viewSubjects(){
        return this.subjectService.getSubjects()

    }
    @UseGuards(RolesGuard)


    @Patch('/:id')
    updateSubject(@Param('id',ParseIntPipe )id:number,@Body() dto:UpdateSubjectDto ){
        return this.subjectService.updateSubject(id,dto)

    }
   
    @UseGuards(RolesGuard)

    @Delete('/:id')
    deleteSubject(@Param('id',ParseIntPipe)id:number){
        return this.subjectService.deleteSubject(id)
    }

    @Post('/review/:id')

    courseReview(@Body() dto:FeedbackDto,@CurrentUser() user:IUser,@Param('id',ParseIntPipe) id:number){

        console.log(user.username);
        
       
        
        
        

        

        return this.subjectService.courseFeedback(dto,id,user.id)
        

    }
}
