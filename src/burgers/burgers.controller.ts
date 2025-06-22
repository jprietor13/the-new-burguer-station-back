import { Controller, Get, Post, Body } from '@nestjs/common';
import { BurgersService } from './burgers.service';
import { Burger } from './burger.entity';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('Burgers')
@Controller('burgers')
export class BurgersController {
  constructor(private readonly burgersService: BurgersService) {}

  @Get()
  getAll() {
    return this.burgersService.findAll();
  }

  @Post()
  @ApiBody({
    schema: {
      example: {
        name: 'La Mexicana',
        description: 'Carne 150g, jalapeños, queso cheddar, pico de gallo',
        price: 11.5,
      },
    },
  })
  create(@Body() body: Burger) {
    return this.burgersService.create(body);
  }
}
