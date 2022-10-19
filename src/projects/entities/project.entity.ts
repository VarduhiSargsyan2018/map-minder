import { ProjectsTemplate } from "src/projects_template/entities/projects_template.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StatusProjecetForTempalte } from "../statusProjectForTemplate.enum";

@Entity({ name: 'projects' })
export class Project {

   @PrimaryGeneratedColumn({ unsigned: true })
   id: number;

   @Column({ unsigned: true })
   user_id: number

   @ManyToOne(type => User, user => user.id, { cascade: true, onDelete: 'CASCADE' })
   @JoinColumn({ name: 'user_id' })
   user: User[];

   @Column({ unsigned: true })
   template_id: number
   
   @ManyToOne(type => ProjectsTemplate, ProjectsTemplate => ProjectsTemplate.id, { cascade: true, onDelete: 'CASCADE' })
   @JoinColumn({ name: 'template_id' })
   projectTemplate: ProjectsTemplate[];


   @Column({
      type: 'enum',
      enum: StatusProjecetForTempalte,
      default: StatusProjecetForTempalte.PROJECT
  })
  status: string;

   @Column({
       type: 'timestamp',
       default: () => 'CURRENT_TIMESTAMP'
   })
   created_at: string;

   @Column({
       type: 'timestamp',
       default: () => 'CURRENT_TIMESTAMP',
       onUpdate: 'CURRENT_TIMESTAMP'
   })
   updated_at: string;
}
