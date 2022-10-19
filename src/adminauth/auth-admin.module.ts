import { Module } from '@nestjs/common';
import { AuthAdminService } from './auth-admin.service';
import { AuthAdminController } from './auth-admin.controller';
import { AdminService } from '../admin/admin.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../admin/entities/admin.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Admin
    ]),
  ],
  controllers: [AuthAdminController],
  providers: [AuthAdminService, AdminService, JwtService, ConfigService]
})
export class AuthAdminModule { }
