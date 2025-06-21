import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Side } from './side.entity';

@Injectable()
export class SidesService {
  constructor(
    @InjectRepository(Side)
    private readonly sideRepo: Repository<Side>,
  ) {}

  findAll(): Promise<Side[]> {
    return this.sideRepo.find();
  }
}
