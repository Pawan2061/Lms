import { Module } from '@nestjs/common';
import { FeedbackModule } from 'src/feedback/feedback.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({
  imports:[PrismaModule,FeedbackModule],
  providers: [CoursesService],
  controllers: [CoursesController]
})
export class CoursesModule {}
