import { Controller, Get } from '@nestjs/common';
import { SaucesService } from './sauces.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Sauces')
@Controller('sauces')
export class SaucesController {
  constructor(private readonly saucesService: SaucesService) {}

  @Get()
  findAll() {
    return this.saucesService.findAll();
  }
}
