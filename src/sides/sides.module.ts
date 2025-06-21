import { Module } from '@nestjs/common';
import { SidesService } from './sides.service';
import { SidesController } from './sides.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Side } from './side.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Side])],
  providers: [SidesService],
  controllers: [SidesController],
})
export class SidesModule {}
