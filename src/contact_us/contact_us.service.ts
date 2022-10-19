import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { IContactUs } from './contact_us.interface';
import { CreateContactUsDto } from './dto/create-contact_us.dto';
import { UpdateContactUsDto } from './dto/update-contact_us.dto';
import { ContactUs } from './entities/contact_us.entity';

@Injectable()
export class ContactUsService {
  constructor(
    @InjectRepository(ContactUs)
    private contactUsRepository:Repository<ContactUs>  
  ){}
 async create({name, email, phone, id_profession, textmsg}: CreateContactUsDto) {
  let insertData={
    name,
    email,
    phone,
    id_profession, 
    textmsg
  }   
  return [];
  }

  findAll(): Promise<IContactUs[]> {
    return this.contactUsRepository.find({
      select: {
        id: true,
        name: true,
        email:true,
        phone:true,
        id_profession:true,
        textmsg:true
      },
    });
  }

  findOne(id: number): Promise<IContactUs> {
    return this.contactUsRepository.findOne({
      select: {
        id: true,
        name: true,
        email:true,
        phone:true,
        id_profession:true,
        textmsg:true
      },
      where: [
        { id }
      ]
    });
  }
  update(id: number, updateContactUsDto: UpdateContactUsDto):Promise<UpdateResult> {
    return this.contactUsRepository.update(id, updateContactUsDto)
  } 

  remove(id: number) {
    return this.contactUsRepository.delete(id);
  }
}
