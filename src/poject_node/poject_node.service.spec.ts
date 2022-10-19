import { Test, TestingModule } from '@nestjs/testing';
import { PojectNodeService } from './poject_node.service';

describe('PojectNodeService', () => {
  let service: PojectNodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PojectNodeService],
    }).compile();

    service = module.get<PojectNodeService>(PojectNodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
