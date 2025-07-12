import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionConsumptionService } from './region_consumption.service';
import { CreateRegionConsumptionDto } from './dto/create-region_consumption.dto';
import { UpdateRegionConsumptionDto } from './dto/update-region_consumption.dto';

@Controller('region-consumption')
export class RegionConsumptionController {
  constructor(private readonly regionConsumptionService: RegionConsumptionService) {}

  @Post()
  create(@Body() createRegionConsumptionDto: CreateRegionConsumptionDto) {
    return this.regionConsumptionService.create(createRegionConsumptionDto);
  }

  @Get()
  findAll() {
    return this.regionConsumptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionConsumptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionConsumptionDto: UpdateRegionConsumptionDto) {
    return this.regionConsumptionService.update(+id, updateRegionConsumptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionConsumptionService.remove(+id);
  }
}
