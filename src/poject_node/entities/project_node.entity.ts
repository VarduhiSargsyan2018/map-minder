import { Project } from "src/projects/entities/project.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

   @Entity({ name: 'projects_nodes' })
   export class ProjectNode {
   
      @PrimaryGeneratedColumn({ unsigned: true })
      id: number;
   
      @Column({ unsigned: true })
      user_id: number
   
      @ManyToOne(type => User, user => user.id, { cascade: true, onDelete: 'CASCADE' })
      @JoinColumn({ name: 'user_id' })
      user: User[];
   
      @Column({ unsigned: true })//?
      parent_node_id: number

      @Column()
      description: string;


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

      /*
      @ManyToOne(type => ProjectNode, parentNode => ProjectNode.id, { cascade: true, onDelete: 'CASCADE' })
      @JoinColumn({ name: 'parent_node_id' })
      parentNode: this[];
   
      */
     /*
     @Column({unsigned:true})
     description:string
     */
    /*
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
   */
}
