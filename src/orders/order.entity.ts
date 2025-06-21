import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Burger } from '../burgers/burger.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Burger)
  burger: Burger;

  @Column('simple-array')
  extras: string[];

  @Column('simple-array')
  sauces: string[];

  @Column()
  side: string;

  @Column()
  drink: string;

  @Column('decimal', { precision: 6, scale: 2 })
  totalPrice: number;

  @CreateDateColumn()
  createdAt: Date;
}
