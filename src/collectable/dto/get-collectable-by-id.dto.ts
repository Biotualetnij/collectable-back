import { IsNotEmpty, IsNumber } from "class-validator";

export  class GetCollectableByIdDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}