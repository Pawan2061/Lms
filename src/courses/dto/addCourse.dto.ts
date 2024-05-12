import { IsArray, IsNotEmpty, IsOptional } from "class-validator";

export class CreateCourseDto{
    id:number

    @IsNotEmpty()
    name:string


    @IsNotEmpty()

    description:string



    @IsArray()
    @IsOptional()
    studentIds:number[];
    




}