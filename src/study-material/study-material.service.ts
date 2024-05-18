import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { MinioService } from 'src/minio/minio.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMaterialDto } from './dto/create-material.dto';

@Injectable()
export class StudyMaterialService {
    constructor(private readonly minioService:MinioService,
        private prismaService:PrismaService)
    {}
    async createStudyMaterial( dto:CreateMaterialDto,file:Express.Multer.File
       ){
            const file_key=randomUUID()
            console.log(dto);
            
            console.log(file);
            

            const fileUrl=await this.minioService.GetfileUrl(file_key)
            console.log(fileUrl);

            await this.minioService.UploadFile(file.buffer,file_key)
            return await this.prismaService.studyMaterial.create({
                data:{
                    id:dto.id,

                    fileUrl:fileUrl,
                    
                    title:dto.title,
                    

                    subjectId:+dto.subjectId,

                    fileType:file.mimetype
                    
                
                    
                }
            })
            
            


    }
    

    

}
