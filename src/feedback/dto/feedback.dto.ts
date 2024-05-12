import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class FeedbackDto{
@IsString()    
@IsNotEmpty()
text :string

@IsNumber()
@IsNotEmpty()
rating:number

  @IsNumber()
  @IsOptional()

  courseId: number;
  @IsNotEmpty()
  @IsOptional()

  subjectId: number;
  @IsNumber()
  @IsOptional()
  authorId: number;

}