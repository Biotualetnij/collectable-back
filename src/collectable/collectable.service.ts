import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCollectableDTO } from './dto/create-collectable.dto';
import { GetCollectableByIdDTO } from './dto/get-collectable-by-id.dto';
import { DeleteCollectableDTO } from './dto/delete-collectable.dto';
import { Collectable } from '@prisma/client';

@Injectable()
export class CollectableService {
    constructor(private prisma: PrismaService) {}
    createCollectable(
            data:CreateCollectableDTO
    ):Promise<Collectable>{
            return  this.prisma.collectable.create({
                data
            });
        }

    getAllCollectables():Promise<Collectable[]>{
        return this.prisma.collectable.findMany();
    }

    getCollectableById(data:GetCollectableByIdDTO):Promise<Collectable>{
        return this.prisma.collectable.findUnique({
            where:{
                id:data.id
            }
        });
    }

   deleteCollectable(id:DeleteCollectableDTO):Promise<boolean>{
        return this.prisma.collectable.delete({
            where:{
                id:id.id
            }
        }).then(()=>true).catch(()=>false);
    }
}
