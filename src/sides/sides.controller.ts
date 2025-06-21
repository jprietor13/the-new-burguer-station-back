import { Controller, Get } from '@nestjs/common';
import { SidesService } from './sides.service';

@Controller('sides')
export class SidesController {
  constructor(private readonly sidesService: SidesService) {}

  @Get()
  findAll() {
    return this.sidesService.findAll();
  }
}
