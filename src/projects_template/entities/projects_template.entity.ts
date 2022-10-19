import { BusinessType } from "src/business_type/entities/business_type.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'projects_templetes' })
export class ProjectsTemplate {
   
   @PrimaryGeneratedColumn({ unsigned: true })
   id: number;

   @Column({ unsigned: true })
   user_id: number

   @ManyToOne(type => User, user => user.id, {cascade:true})
   @JoinColumn({name:'user_id'})
   user:User
 
   @Column({ unsigned: true })
   business_id: number

   @ManyToOne(type => BusinessType, business_type => business_type.id, {cascade:true})
   @JoinColumn({name:'business_id'})
   business_type:BusinessType
 
   @Column()
   name:string;

   @Column()
   description:string;

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
