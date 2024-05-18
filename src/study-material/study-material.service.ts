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
    async createStudyMaterial(file:Express.Multer.File,
        dto:CreateMaterialDto){
            const file_key=randomUUID()
            console.log(file);
            

            const fileUrl=await this.minioService.GetfileUrl(file_key)
            console.log(fileUrl);
            


    }
    

    

}
