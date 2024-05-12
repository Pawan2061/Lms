import { IsNotEmpty } from "class-validator";

export class CreateCourseDto{
    id:number

    @IsNotEmpty()
    name:string


    @IsNotEmpty()

    description:string



    
    




}