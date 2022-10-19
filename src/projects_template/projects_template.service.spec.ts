import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsTemplateService } from './projects_template.service';

describe('ProjectsTemplateService', () => {
  let service: ProjectsTemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsTemplateService],
    }).compile();

    service = module.get<ProjectsTemplateService>(ProjectsTemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
