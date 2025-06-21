import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Side {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 4, scale: 2 })
  price: number;
}
