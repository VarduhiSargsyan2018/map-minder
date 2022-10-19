import { Admin } from "src/admin/entities/admin.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'business_types' })
export class BusinessType {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;

    @Column({ unsigned: true })
    admin_id: number

    @ManyToOne(type => Admin, admin => admin.id, { cascade: true })
    @JoinColumn({ name: 'admin_id' })
    admin: Admin;

    @Column({
        unique: true
    })
    name: string;

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


