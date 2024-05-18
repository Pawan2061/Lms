import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { MinioModule } from 'src/minio/minio.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { uploadController } from './study-material.controller';
import { StudyMaterialService } from './study-material.service';

@Module({
  imports:[MulterModule,MinioModule,PrismaModule],
  providers: [StudyMaterialService],
  controllers: [uploadController]
})
export class StudyMaterialModule {}
