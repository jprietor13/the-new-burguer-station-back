import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { Burger } from '../burgers/burger.entity';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepo: Repository<Order>,
    @InjectRepository(User)
    private usersRepo: Repository<User>,
    @InjectRepository(Burger)
    private burgersRepo: Repository<Burger>,
    private readonly emailService: EmailService,
  ) {}

  async create(orderData: any, userId: number) {
    const user = await this.usersRepo.findOne({ where: { id: userId } });
    const burger = await this.burgersRepo.findOne({
      where: { id: orderData.burgerId },
    });

    if (!user || !burger) throw new Error('User or burger not found');

    const order = new Order();
    order.user = user;
    order.burger = burger;
    order.extras = orderData.extras;
    order.sauces = orderData.sauces;
    order.side = orderData.side;
    order.drink = orderData.drink;
    order.totalPrice = orderData.totalPrice;

    const savedOrder = await this.ordersRepo.save(order);

    await this.emailService.sendOrderConfirmation(user.email, {
      burger,
      extras: order.extras,
      sauces: order.sauces,
      drink: order.drink,
      side: order.side,
      totalPrice: order.totalPrice,
    });

    return savedOrder;
  }

  async findByUser(userId: number) {
    return this.ordersRepo.find({
      where: { user: { id: userId } },
      relations: ['burger'],
      order: { createdAt: 'DESC' },
    });
  }
}
