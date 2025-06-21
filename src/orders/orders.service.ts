import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { Burger } from '../burgers/burger.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepo: Repository<Order>,
    @InjectRepository(User)
    private usersRepo: Repository<User>,
    @InjectRepository(Burger)
    private burgersRepo: Repository<Burger>,
  ) {}

  async create(orderData: any, userId: number) {
    const user = await this.usersRepo.findOne({ where: { id: userId } });
    if (!user) throw new Error(`User with id ${userId} not found`);

    const burger = await this.burgersRepo.findOne({
      where: { id: orderData.burgerId },
    });
    if (!burger)
      throw new Error(`Burger with id ${orderData.burgerId} not found`);

    const order = new Order();
    order.user = user;
    order.burger = burger;
    order.extras = orderData.extras;
    order.sauces = orderData.sauces;
    order.side = orderData.side;
    order.drink = orderData.drink;
    order.totalPrice = orderData.totalPrice;

    return this.ordersRepo.save(order);
  }

  async findByUser(userId: number) {
    return this.ordersRepo.find({
      where: { user: { id: userId } },
      relations: ['burger'],
      order: { createdAt: 'DESC' },
    });
  }
}
