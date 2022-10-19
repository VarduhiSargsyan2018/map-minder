import { Test, TestingModule } from '@nestjs/testing';
import { PojectNodeController } from './poject_node.controller';
import { PojectNodeService } from './poject_node.service';

describe('PojectNodeController', () => {
  let controller: PojectNodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PojectNodeController],
      providers: [PojectNodeService],
    }).compile();

    controller = module.get<PojectNodeController>(PojectNodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
