import { Controller, Get, Post, Body } from '@nestjs/common';
import { BurgersService } from './burgers.service';
import { Burger } from './burger.entity';

@Controller('burgers')
export class BurgersController {
  constructor(private readonly burgersService: BurgersService) {}

  @Get()
  getAll() {
    return this.burgersService.findAll();
  }

  @Post()
  create(@Body() body: Burger) {
    return this.burgersService.create(body);
  }
}
