import { Test, TestingModule } from '@nestjs/testing';
import { CollectableActionController } from './collectable-action.controller';

describe('CollectableActionController', () => {
  let controller: CollectableActionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectableActionController],
    }).compile();

    controller = module.get<CollectableActionController>(CollectableActionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
