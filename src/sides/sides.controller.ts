import { Controller, Get } from '@nestjs/common';
import { SidesService } from './sides.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Sides')
@Controller('sides')
export class SidesController {
  constructor(private readonly sidesService: SidesService) {}

  @Get()
  findAll() {
    return this.sidesService.findAll();
  }
}
