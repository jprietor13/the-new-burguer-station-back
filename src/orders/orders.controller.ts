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

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
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
