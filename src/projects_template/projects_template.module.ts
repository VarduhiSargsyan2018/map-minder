import { Module } from '@nestjs/common';
import { ProjectsTemplateService } from './projects_template.service';
import { ProjectsTemplateController } from './projects_template.controller';

@Module({
  controllers: [ProjectsTemplateController],
  providers: [ProjectsTemplateService]
})
export class ProjectsTemplateModule {}
