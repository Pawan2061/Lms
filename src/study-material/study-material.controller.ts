import { Body, Controller, Get, Param, ParseIntPipe, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RolesGuard } from "src/guards/admin.guard";
import { CreateMaterialDto } from "./dto/create-material.dto";
import { StudyMaterialService } from "./study-material.service";
@ApiBearerAuth()
@ApiTags('materials')
@Controller('materials')

export class uploadController{
    constructor(private studyService:StudyMaterialService){}

    
    @Post()
    @ApiOperation({summary:'creating study material'})
    @ApiBody({type:CreateMaterialDto})
    @UseInterceptors(FileInterceptor('file'))
    @UseGuards(RolesGuard)
    
    uploadFile(
        @Body() dto:CreateMaterialDto,
        
        @UploadedFile() file:Express.Multer.File){
        return  this.studyService.createStudyMaterial(dto,file)


       
        


    }
    
    @Get()
    @ApiOperation({summary:"Get- study materials"})
    getMaterials(){
        return this.studyService.getStudyMaterials()

    }


    
    @Get('/:id')
    @ApiOperation({summary:"Get- study materials"})
    getMaterial(@Param('id',ParseIntPipe) id:number){
        return this.studyService.getStudyMaterial(id)


    }



    

}