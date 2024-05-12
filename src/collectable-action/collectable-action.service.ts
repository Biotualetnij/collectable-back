import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollectableActionService {
    constructor(private prisma: PrismaService) {}
    
    collectCollectable(){}
    createAction(){}
    getAllActionsByUser(){}
}
