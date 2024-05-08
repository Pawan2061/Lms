import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
@Module({
  imports:[
    MailerModule.forRoot({
      transport:{
        host:process.env.MAIL_HOST,
        port:process.env.MAIL_PORT
      },
      defaults:{
        from:process.env.MAIL_DEFAULT_FROM
      }
    })

  ],
  providers: [MailService],
  exports:[MailService]
})
export class MailModule {}
