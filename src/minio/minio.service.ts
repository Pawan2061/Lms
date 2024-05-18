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
        this.port=parseInt(configService.getOrThrow('PORT'))
        this.endpoint=configService.getOrThrow('END_POINT')
        this.minioClient=new Minio.Client({
            endPoint:this.endpoint,
            port:this.port,
            useSSL:false,
            accessKey:this.accessKey,
            secretKey:this.secretKey    
        })
    }

   async UploadFile(file: Buffer, key: string) {
    try {
       this.minioClient.putObject(
        this.configService.getOrThrow('BUCKET'),
        key,
        file,
        
     
        
       
        
        
      );
      
    } catch (e) {
      return e.message;
    }
  }

      async GetfileUrl(key: string) {
    return `http://localhost:9000/${this.configService.get(
      'BUCKET',
    )}/${key}`;
  }


}
