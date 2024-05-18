import { Body, Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateMaterialDto } from "./dto/create-material.dto";
import { StudyMaterialService } from "./study-material.service";
@Controller('upload')
export class uploadController{
    constructor(private studyService:StudyMaterialService){}

    
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(
        @Body() dto:CreateMaterialDto,
        
        @UploadedFile( new ParseFilePipe({
        validators:[new MaxFileSizeValidator({maxSize:1000}) ,new FileTypeValidator({fileType:'image/jpeg'})]
    })) file:Express.Multer.File){
        return  this.studyService.createStudyMaterial(file,dto)


       
        


    }


}