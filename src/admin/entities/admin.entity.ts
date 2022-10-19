import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import {StatusList} from "../status.enum"

@Entity({ name: 'admins' })
export class Admin {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;

    @Column({
        type: 'enum',
        enum: StatusList,
        default: StatusList.PENDING
    })
    status: string;

    @Column()
    name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

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
