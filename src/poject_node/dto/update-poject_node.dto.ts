import { PartialType } from '@nestjs/mapped-types';
import { CreatePojectNodeDto } from './create-poject_node.dto';

export class UpdatePojectNodeDto extends PartialType(CreatePojectNodeDto) {}
