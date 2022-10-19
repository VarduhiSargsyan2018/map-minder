import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsTemplateController } from './projects_template.controller';
import { ProjectsTemplateService } from './projects_template.service';

describe('ProjectsTemplateController', () => {
  let controller: ProjectsTemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsTemplateController],
      providers: [ProjectsTemplateService],
    }).compile();

    controller = module.get<ProjectsTemplateController>(ProjectsTemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
