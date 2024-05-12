import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt.guard';
import { CoursesModule } from './courses/courses.module';
import { MailModule } from './mail/mail.module';
import { PrismaModule } from './prisma/prisma.module';
import { SubjectModule } from './subject/subject.module';
import { UserModule } from './user/user.module';





// use config module
@Module({
  imports: [PrismaModule, AuthModule, UserModule,MailModule,
    CoursesModule,SubjectModule,
  ConfigModule.forRoot({
    isGlobal:true
  }),
  CoursesModule,
  SubjectModule,
  
  ],
  controllers: [AppController],
  providers: [
    {
      provide:APP_GUARD,
      useClass:JwtAuthGuard
    },
    AppService],
})
export class AppModule {}
