import { Module } from '@nestjs/common';
import { PojectNodeService } from './poject_node.service';
import { PojectNodeController } from './poject_node.controller';

@Module({
  controllers: [PojectNodeController],
  providers: [PojectNodeService]
})
export class PojectNodeModule {}
