import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectsTemplateDto } from './create-projects_template.dto';

export class UpdateProjectsTemplateDto extends PartialType(CreateProjectsTemplateDto) {}
