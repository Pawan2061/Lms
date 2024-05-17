import { IsNotEmpty, IsString } from "class-validator";

export class CreateMaterialDto{
    @IsNotEmpty()
    @IsString()

    title:string

    



    
}