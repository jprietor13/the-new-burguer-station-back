import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
@ApiTags('Orders') // 📁 Agrupa en Swagger como "Orders"
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiBody({
    schema: {
      example: {
        burgerId: 1,
        extras: ['Queso cheddar', 'Huevo frito'],
        sauces: ['Mayonesa', 'BBQ'],
        side: 'Papas a la francesa',
        drink: 'Coca-Cola',
        totalPrice: 18.5,
      },
    },
  })
  async createOrder(@Body() body, @Request() req) {
    const userId = req.user.userId;
    return this.ordersService.create(body, userId);
  }

  @Get()
  async getMyOrders(@Request() req) {
    const userId = req.user.userId;
    return this.ordersService.findByUser(userId);
  }
}
