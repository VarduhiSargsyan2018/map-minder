import { Module } from '@nestjs/common';
import { ContactUsService } from './contact_us.service';
import { ContactUsController } from './contact_us.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactUs } from './entities/contact_us.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      ContactUs
    ])
  ],
  controllers: [ContactUsController],
  providers: [ContactUsService]
})
export class ContactUsModule {}
