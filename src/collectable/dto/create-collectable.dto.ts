
import { EnumType } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateCollectableDTO{
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsString()
    @IsNotEmpty()
    currency: string;

    @IsEnum(EnumType)
    @IsNotEmpty()
    type: EnumType;
    
    @IsNumber()
    @IsNotEmpty()
    queueNumber: number;
}
