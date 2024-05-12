import { IsNotEmpty, IsNumber, IsString } from "class-validator";

 export class UpdateSubjectDto{

 

    @IsNotEmpty()
    @IsString()
    title:string

    @IsNumber()
    @IsNotEmpty()

    courseId:number

    
    
    
}