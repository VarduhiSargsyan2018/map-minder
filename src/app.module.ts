import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ProfessionModule } from './profession/profession.module';
import { UserProfessionModule } from './user-profession/user-profession.module';
import { ConfigModule } from '@nestjs/config';
import { dbConfig } from './config/database.config';
import { Admin } from './admin/entities/admin.entity';
import { User } from './user/entities/user.entity';
import { Profession } from './profession/entities/profession.entity';
import { UserProfession } from './user-profession/entities/user-profession.entity';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ContactUsModule } from './contact_us/contact_us.module';
import { ContactUs } from './contact_us/entities/contact_us.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { BusinessTypeModule } from './business_type/business_type.module';
import { BusinessType } from './business_type/entities/business_type.entity';
import { ProjectsTemplateModule } from './projects_template/projects_template.module';
import { ProjectsTemplate } from './projects_template/entities/projects_template.entity';
import { ProjectsModule } from './projects/projects.module';
import { Project } from './projects/entities/project.entity';
import { PojectNodeModule } from './poject_node/poject_node.module';
import { ProjectNode}  from './poject_node/entities/project_node.entity';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';



@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        ignoreTLS: false,
        secure: false,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
      },
      defaults: {
        from: `${process.env.APP_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
      },
      template: {
        dir: process.cwd() + '/template/',
        adapter: new EjsAdapter(),
        options: {
          strict: true,
        },
      },
    }),

    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Admin, User, Profession, UserProfession, ContactUs, BusinessType, ProjectsTemplate, Project, ProjectNode],
      synchronize: true,

    }),


    
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    UserModule,
    AdminModule,
    ProfessionModule,
    UserProfessionModule,
    AuthModule, 
    ContactUsModule,
    BusinessTypeModule,
    ProjectsTemplateModule,
    ProjectsModule,
    PojectNodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
