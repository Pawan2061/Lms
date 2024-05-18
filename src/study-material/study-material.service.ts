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
    async getStudyMaterials():Promise<Object>{

        try {
            const materials=await this.prismaService.studyMaterial.findMany()
            if(!materials){
                return {
                    message:"there are no material"

                }
            }
            return {
                studymaterials:materials
            }
            
        } catch (error) {
            return {
                error:error.message
            }
            
        }
    }
     async getStudyMaterial(id:number):Promise<Object>{

        try {
            const material=await this.prismaService.studyMaterial.findUnique({
                where:{
                    id:id

                }
            })
            if(!material){
                return {
                    message:"there are no material"

                }
            }
            return {
                studymaterial:material
            }
            
        } catch (error) {
            return {
                error:error.message
            }
            
        }
    }
    

    

}
