import { Injectable } from '@nestjs/common';
import { CreateProjectsTemplateDto } from './dto/create-projects_template.dto';
import { UpdateProjectsTemplateDto } from './dto/update-projects_template.dto';

@Injectable()
export class ProjectsTemplateService {
  create(createProjectsTemplateDto: CreateProjectsTemplateDto) {
    return 'This action adds a new projectsTemplate';
  }

  findAll() {
    return `This action returns all projectsTemplate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectsTemplate`;
  }

  update(id: number, updateProjectsTemplateDto: UpdateProjectsTemplateDto) {
    return `This action updates a #${id} projectsTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectsTemplate`;
  }
}
