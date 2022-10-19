import { Injectable } from '@nestjs/common';
import { CreatePojectNodeDto } from './dto/create-poject_node.dto';
import { UpdatePojectNodeDto } from './dto/update-poject_node.dto';

@Injectable()
export class PojectNodeService {
  create(createPojectNodeDto: CreatePojectNodeDto) {
    return 'This action adds a new pojectNode';
  }

  findAll() {
    return `This action returns all pojectNode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pojectNode`;
  }

  update(id: number, updatePojectNodeDto: UpdatePojectNodeDto) {
    return `This action updates a #${id} pojectNode`;
  }

  remove(id: number) {
    return `This action removes a #${id} pojectNode`;
  }
}
