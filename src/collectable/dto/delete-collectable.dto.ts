import { IsNotEmpty, IsNumber } from "class-validator";

export  class DeleteCollectableDTO {
  @IsNumber() 
  @IsNotEmpty()
  id: number;
}