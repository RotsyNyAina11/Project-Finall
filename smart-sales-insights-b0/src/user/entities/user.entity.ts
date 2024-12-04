import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class UserApp{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    role: string

    @Column()
    password: string
}