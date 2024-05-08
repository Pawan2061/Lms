import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class MailService {
    constructor(
        private readonly mailerService:MailerService,
        private readonly configService:ConfigService
    ){}
    async sendVerificationMail(
        email:string,
        token:number
    

    ):Promise<{message:string}>{
        const ServerUrl=this.configService.get('SERVER_URL')
        const Url=`${ServerUrl}/auth/confirm/token=${token}`
        console.log(token);
        
        try {
             console.log("reached  here");
            await this.mailerService.sendMail({
            to:email,
            subject:'Email Verification',
            html: `
    <h2>Email Verification</h2>
    <p>Thank you for signing up! To complete your registration, please click the link below to verify your email address:</p>
    <p><a href="${Url}">Verify Email</a></p>
    <p>If you did not sign up for our service, you can ignore this email.</p>
    <p>Regards,<br>Your App Team</p>
  `,

        })
       
        
        return {
            message:"mail sent successfully"
        }
            
        } catch (error) {
            
            return error.message
        }


        

    }
  
}
