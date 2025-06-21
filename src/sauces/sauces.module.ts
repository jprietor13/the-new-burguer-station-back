import { Module } from '@nestjs/common';
import { SaucesService } from './sauces.service';
import { SaucesController } from './sauces.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sauce } from './sauce.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sauce])],
  providers: [SaucesService],
  controllers: [SaucesController],
})
export class SaucesModule {}
