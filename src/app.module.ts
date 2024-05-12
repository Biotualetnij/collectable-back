import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CollectableService } from './collectable/collectable.service';
import { CollectableController } from './collectable/collectable.controller';
import { CollectableActionController } from './collectable-action/collectable-action.controller';
import { CollectableActionService } from './collectable-action/collectable-action.service';

@Module({
  imports: [],
  controllers: [ CollectableController, CollectableActionController],
  providers: [PrismaService, CollectableService, CollectableActionService],
})
export class AppModule {}
