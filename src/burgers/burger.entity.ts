import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Burger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;
}
