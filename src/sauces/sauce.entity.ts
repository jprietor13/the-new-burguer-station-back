import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sauce {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 4, scale: 2, default: 0 })
  price: number;
}