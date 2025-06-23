import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { BurgersService } from './burgers.service';
import { Burger } from './burger.entity';
import {
  ApiTags,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Burgers')
@Controller('burgers')
export class BurgersController {
  constructor(private readonly burgersService: BurgersService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las hamburguesas' })
  getAll() {
    return this.burgersService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Crear una hamburguesa' })
  @ApiBody({
    schema: {
      example: {
        name: 'La Mexicana',
        description: 'Carne 150g, jalapeños, queso cheddar, pico de gallo',
        price: 11.5,
        image: 'la-mexicana.png',
      },
    },
  })
  create(@Body() body: Burger) {
    return this.burgersService.create(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener hamburguesa por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Hamburguesa encontrada' })
  @ApiResponse({ status: 404, description: 'Hamburguesa no encontrada' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const burger = await this.burgersService.findOne(id);
    if (!burger) {
      throw new NotFoundException(`Burger con ID ${id} no encontrada`);
    }
    return burger;
  }
}
