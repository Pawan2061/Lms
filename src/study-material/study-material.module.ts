import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { uploadController } from './study-material.controller';
import { StudyMaterialService } from './study-material.service';

@Module({
  imports:[MulterModule],
  providers: [StudyMaterialService],
  controllers: [uploadController]
})
export class StudyMaterialModule {}
