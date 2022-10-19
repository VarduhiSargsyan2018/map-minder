import { Injectable } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { JwtService } from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config'
import * as bcrypt from 'bcrypt';
import { Admin } from 'src/admin/entities/admin.entity';
import { DateHelper } from 'src/helper/date.helper';

@Injectable()
export class AuthAdminService {
  constructor(
    private adminService: AdminService,
    private jwtService: JwtService,
    private config: ConfigService,
) { }

async validateAdmin(email: string, password: string): Promise<any> {
    const admin = await this.adminService.findByEmail(email);
    if (admin && bcrypt.compareSync(password, admin.password)) {
        const { password, ...result } = admin;
        return result;
    }

    return null;
}

async login(admin: Admin) {
    const payload = {
        id: admin.id,
        name: admin.name,
        email: admin.email,
    }

    return {
        access_token: this.jwtService.sign(payload),
        refresh_token: this.jwtService.sign(payload),
        token_exp_time: DateHelper.setHours(parseInt(this.config.get<string>('JWT_ADMIN_EXPIRE_TIME'))),
        user: payload
    };
}
}
