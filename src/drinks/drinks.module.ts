import { Module } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { DrinksController } from './drinks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drink } from './drink.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Drink])],
  providers: [DrinksService],
  controllers: [DrinksController],
})
export class DrinksModule {}
