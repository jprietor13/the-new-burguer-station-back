import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Extra } from './extra.entity';

@Injectable()
export class ExtrasService {
  constructor(
    @InjectRepository(Extra)
    private readonly extraRepo: Repository<Extra>,
  ) {}

  findAll(): Promise<Extra[]> {
    return this.extraRepo.find();
  }
}
