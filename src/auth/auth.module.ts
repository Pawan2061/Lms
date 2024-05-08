import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MailModule } from 'src/mail/mail.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constant';



@Module({
  imports:[PrismaModule,
    PassportModule,
    MailModule,
    
  JwtModule.register({
    global:true,
    secret:jwtConstants.secret,
    signOptions:{expiresIn:'5min'}
   
  })],
  controllers: [AuthController],
  providers: [AuthService],
  
})
export class AuthModule {}
