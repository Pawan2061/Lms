import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateMaterialDto } from "./dto/create-material.dto";
import { StudyMaterialService } from "./study-material.service";
@ApiBearerAuth()
@ApiTags('upload')
@Controller('upload')

export class uploadController{
    constructor(private studyService:StudyMaterialService){}

    
    @Post()
    @ApiOperation({summary:'creating study material'})
    @ApiBody({type:CreateMaterialDto})
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(
        @Body() dto:CreateMaterialDto,
        
        @UploadedFile() file:Express.Multer.File){
        return  this.studyService.createStudyMaterial(dto,file)


       
        


    }


}