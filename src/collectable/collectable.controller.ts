import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCollectableDTO } from './dto/create-collectable.dto';
import { CollectableService } from './collectable.service';
import { GetCollectableByIdDTO } from './dto/get-collectable-by-id.dto';
import { DeleteCollectableDTO } from './dto/delete-collectable.dto';

@Controller('collectable')
export class CollectableController {
    constructor(private collectableService:CollectableService) {}
    @Post('/create')
    createCollectable(@Body()data:CreateCollectableDTO){
        try{
            return this.collectableService.createCollectable(data);
        }catch(e){
            console.log(e);
        }
    }

    @Get('/get-all')
    async getAllCollectables(){
       try{
            return await this.collectableService.getAllCollectables();
       }catch(e){
              console.log(e);
        }     
    }
    
    @Get('/get/:id')
    getCollectableById(@Param()params:GetCollectableByIdDTO){
        try{
            return this.collectableService.getCollectableById(params);
        }catch(e){
            console.log(e);
        }
    }
    
    @Post('/delete')
    deleteCollectable(@Body()data:DeleteCollectableDTO){
        try{
            return this.collectableService.deleteCollectable(data);
        }catch(e){
            console.log(e);
        }
    }
}
