import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Minio from "minio";


@Injectable()
export class MinioService {
    private minioClient:Minio.Client
    private endpoint:string;
    private port:number;
    private accessKey:string
    private secretKey:string

    constructor(private readonly configService:ConfigService){
        this.accessKey=configService.getOrThrow('ACCESS_KEY')
        this.secretKey=configService.getOrThrow('SECRET_KEY')
        this.port=configService.getOrThrow('PORT')
        this.endpoint=configService.getOrThrow('END_POINT')
        this.minioClient=new Minio.Client({
            endPoint:this.endpoint,
            port:this.port,
            useSSL:false,
            accessKey:this.accessKey,
            secretKey:this.secretKey    
        })
    }

    async uploadFile(file:Buffer,key:string){
        try {
           
        } catch (error) {
            
        }
    }

      async GetfileUrl(key: string) {
    return `https://localhost:9001/${this.configService.get(
      'BUCKET_NAME',
    )}/${key}`;
  }


}
