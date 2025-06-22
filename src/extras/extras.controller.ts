import { Controller, Get } from '@nestjs/common';
import { ExtrasService } from './extras.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Extras')
@Controller('extras')
export class ExtrasController {
  constructor(private readonly extrasService: ExtrasService) {}

  @Get()
  findAll() {
    return this.extrasService.findAll();
  }
}
