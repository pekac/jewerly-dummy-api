import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Comment } from './comment.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column()
  info: string;

  @Column()
  description: string;

  @Column()
  img: string;

  @OneToMany(() => Comment, (comment) => comment.product)
  comments: Comment[];
}
