import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { StatusList } from "../status.enum";

@Entity({ name: 'contact_us' })
export class ContactUs { 
   @PrimaryGeneratedColumn({ unsigned: true })
   id: number;

   @Column()
   name: string;

   @Column()
   email: string;
  
   @Column()
   phone: string;

   @Column()
   id_profession:number;

   @Column()
   textmsg:string;

   @Column({
      type: 'enum',
      enum: StatusList,
      default: StatusList.INORDER
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
