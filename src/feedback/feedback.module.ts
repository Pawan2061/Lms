import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FeedbackService } from './feedback.service';

@Module({
  imports:[PrismaModule],

  providers: [FeedbackService],
  exports:[FeedbackService]
})
export class FeedbackModule {}
