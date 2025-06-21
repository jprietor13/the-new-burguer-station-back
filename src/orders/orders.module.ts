import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './order.entity';
import { User } from '../users/user.entity';
import { Burger } from '../burgers/burger.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User, Burger])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
