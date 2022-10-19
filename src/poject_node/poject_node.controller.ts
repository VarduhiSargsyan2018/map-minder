import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PojectNodeService } from './poject_node.service';
import { CreatePojectNodeDto } from './dto/create-poject_node.dto';
import { UpdatePojectNodeDto } from './dto/update-poject_node.dto';

@Controller('poject-node')
export class PojectNodeController {
  constructor(private readonly pojectNodeService: PojectNodeService) {}

  @Post()
  create(@Body() createPojectNodeDto: CreatePojectNodeDto) {
    return this.pojectNodeService.create(createPojectNodeDto);
  }

  @Get()
  findAll() {
    return this.pojectNodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pojectNodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePojectNodeDto: UpdatePojectNodeDto) {
    return this.pojectNodeService.update(+id, updatePojectNodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pojectNodeService.remove(+id);
  }
}
