import { Test, TestingModule } from '@nestjs/testing';
import { CollectableActionService } from './collectable-action.service';

describe('CollectableActionService', () => {
  let service: CollectableActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectableActionService],
    }).compile();

    service = module.get<CollectableActionService>(CollectableActionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
