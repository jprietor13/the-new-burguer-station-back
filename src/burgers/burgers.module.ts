import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BurgersService } from './burgers.service';
import { BurgersController } from './burgers.controller';
import { Burger } from './burger.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Burger])],
  controllers: [BurgersController],
  providers: [BurgersService],
})
export class BurgersModule {}
