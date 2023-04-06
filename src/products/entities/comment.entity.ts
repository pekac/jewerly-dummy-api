import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from './product.entity';

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  rating: number;

  @Column()
  title: string;

  @Column()
  user: string;

  @ManyToOne(() => Product, (product) => product.comments)
  product: Product;
}
