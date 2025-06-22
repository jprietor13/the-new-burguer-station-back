import { Controller, Get } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Drinks') // Agrupa en Swagger
@Controller('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Get()
  findAll() {
    return this.drinksService.findAll();
  }
}
