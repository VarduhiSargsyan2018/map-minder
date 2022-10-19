import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthAdminService } from './auth-admin.service';

@Controller()
export class AuthAdminController  {
    constructor(private authAdminService: AuthAdminService) {}

    @UseGuards(AuthGuard('admin-login'))
    @Post('admin/login')
    adminLogin(@Request() req) {
       return this.authAdminService.login(req.user)// admin e ?
    }

    @UseGuards(AuthGuard('check-jwt'))
    @Get('auth-admin/admin')
    authAdmin(@Request() req) {
       return req.user
    }

//   @Post('admin/login')
//     userAdmin() {

//     }
}
