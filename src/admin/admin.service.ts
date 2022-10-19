import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { StatusList } from './status.enum';
import * as bcrypt from 'bcrypt';



@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
  ) { }

  async create({status, name, email, password }: CreateAdminDto) {
    const saltOrRounds = 5;

    let insertData = {
      status:StatusList.ACTIVE,
      name,
      email,
      password: await bcrypt.hash(password, saltOrRounds)
    }

    try {
      this.adminsRepository.insert(insertData)
    } catch (error) {

    }
    return [];
  }

  findAll() {
    return this.adminsRepository.find();
  }

  findOne(id: number): Promise<Admin> {
    return this.adminsRepository.findOneBy({ id });
  }


  findByEmail(email: string): Promise<Admin> {
    return this.adminsRepository.findOne(
      {
        where: [
          { email: email }
        ]
      });
  }
  
  update(id: number, updateAdminDto: UpdateAdminDto): Promise<UpdateResult> {
    return this.adminsRepository.update(id, updateAdminDto);
  }

  remove(id: number) {
    return this.adminsRepository.delete(id);
  }
}
