import { IsNotEmpty, IsNumber, IsString } from "class-validator";

 export class CreateSubjectDto{

    @IsNumber()
    @IsNotEmpty()
    id:number

    @IsNotEmpty()
    @IsString()
    title:string

    @IsNumber()
    @IsNotEmpty()

    courseId:number

    
    
    
}