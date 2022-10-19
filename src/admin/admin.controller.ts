import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AuthGuard } from '@nestjs/passport';
import { IAdmin } from './admin.interface';


@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
   this.adminService.create(createAdminDto);
   return {
    massage:"Created"
   }
  }

  @UseGuards(AuthGuard('admin-check-jwt'))
  @Get()
  findAll(@Request() req) {
    console.log(req.user);
    return this.adminService.findAll();
  }

  @UseGuards(AuthGuard('admin-check-jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @UseGuards(AuthGuard('admin-check-jwt'))
  @Patch()
  async update(@Body() updateAdminDto: UpdateAdminDto, @Request() req): Promise<IAdmin> {
    let authId = req.user.id;
    await this.adminService.update(+authId, updateAdminDto);

    let admin = await this.adminService.findOne(authId);

    return {
      status: admin.status,
      name: admin.name,
      email: admin.email,
      password:admin.password
    };
  }

  @UseGuards(AuthGuard('admin-check-jwt'))
  @Delete()
  delete(@Request() req) {
    return this.adminService.remove(+req.user.id);
  }
}
