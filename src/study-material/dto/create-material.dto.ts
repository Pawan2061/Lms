import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateMaterialDto{
    @IsNumber()
    @IsOptional()
    id:number

    
    @IsNotEmpty()
    @IsString()

    title:string

    @ApiProperty()


  @IsString()
  @IsNotEmpty()
  fileUrl: string;


  @IsNotEmpty()
  @IsNumber()
  subjectId: number;


@ApiProperty()
  @IsString()
  @IsNotEmpty()
  fileType: string;
    



    
}