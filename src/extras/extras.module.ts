import { Module } from '@nestjs/common';
import { ExtrasService } from './extras.service';
import { ExtrasController } from './extras.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Extra } from './extra.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Extra])],
  controllers: [ExtrasController],
  providers: [ExtrasService],
})
export class ExtrasModule {}
