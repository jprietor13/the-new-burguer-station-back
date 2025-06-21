import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sauce } from './sauce.entity';

@Injectable()
export class SaucesService {
  constructor(
    @InjectRepository(Sauce)
    private readonly sauceRepo: Repository<Sauce>,
  ) {}

  findAll(): Promise<Sauce[]> {
    return this.sauceRepo.find();
  }
}
