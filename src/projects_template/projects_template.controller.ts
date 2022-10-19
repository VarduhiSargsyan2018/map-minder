import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectsTemplateService } from './projects_template.service';
import { CreateProjectsTemplateDto } from './dto/create-projects_template.dto';
import { UpdateProjectsTemplateDto } from './dto/update-projects_template.dto';

@Controller('projects-template')
export class ProjectsTemplateController {
  constructor(private readonly projectsTemplateService: ProjectsTemplateService) {}

  @Post()
  create(@Body() createProjectsTemplateDto: CreateProjectsTemplateDto) {
    return this.projectsTemplateService.create(createProjectsTemplateDto);
  }

  @Get()
  findAll() {
    return this.projectsTemplateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsTemplateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectsTemplateDto: UpdateProjectsTemplateDto) {
    return this.projectsTemplateService.update(+id, updateProjectsTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsTemplateService.remove(+id);
  }
}
