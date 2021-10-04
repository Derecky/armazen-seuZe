import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import { Category } from './Category';


@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @ManyToOne(()=>Category)
    @JoinColumn()
    category: Category;

    @Column()
    description: string;

    @Column({
        type: 'float'
    })
    price: number;

    @Column()
    image: string;

}
