import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private prismaService: PrismaService) {}


  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request=context.switchToHttp().getRequest()
    
    
    
    const userId=request.user.userId
    
    const user=await this.prismaService.user.findFirst({
        where:{
            id:userId
        }
    })
    
    
    
    return user?.role==='Admin';



    
  }
}




