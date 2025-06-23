import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Burger } from './burger.entity';

@Injectable()
export class BurgersService {
  constructor(
    @InjectRepository(Burger)
    private burgerRepo: Repository<Burger>,
  ) {}

  findAll(): Promise<Burger[]> {
    return this.burgerRepo.find();
  }

  create(burger: Burger): Promise<Burger> {
    return this.burgerRepo.save(burger);
  }

  async findOne(id: number): Promise<Burger | null> {
    return this.burgerRepo.findOne({ where: { id } });
  }
}
