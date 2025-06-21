import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Drink } from './drink.entity';

@Injectable()
export class DrinksService {
  constructor(
    @InjectRepository(Drink)
    private readonly drinkRepo: Repository<Drink>,
  ) {}

  findAll(): Promise<Drink[]> {
    return this.drinkRepo.find();
  }
}
