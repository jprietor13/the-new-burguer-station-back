import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './order.entity';
import { User } from '../users/user.entity';
import { Burger } from '../burgers/burger.entity';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User, Burger]), EmailModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
