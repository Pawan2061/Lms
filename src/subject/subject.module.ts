import { Module } from '@nestjs/common';
import { FeedbackModule } from 'src/feedback/feedback.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';

@Module({
  imports:[PrismaModule,FeedbackModule],
  providers: [SubjectService],
  controllers: [SubjectController]
})
export class SubjectModule {}
