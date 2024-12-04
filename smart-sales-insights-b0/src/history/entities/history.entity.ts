import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class History{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idClient: string

    @Column()
    productId: string

    @Column()
    productName: string

    @Column()
    productCategorie: string;

    @Column()
    date: string
}