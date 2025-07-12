import { Module } from '@nestjs/common';
import { RegionConsumptionService } from './region_consumption.service';
import { RegionConsumptionController } from './region_consumption.controller';

@Module({
  controllers: [RegionConsumptionController],
  providers: [RegionConsumptionService],
})
export class RegionConsumptionModule {}
