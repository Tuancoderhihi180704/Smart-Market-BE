import { Injectable } from '@nestjs/common';
import { CreateRegionConsumptionDto } from './dto/create-region_consumption.dto';
import { UpdateRegionConsumptionDto } from './dto/update-region_consumption.dto';

@Injectable()
export class RegionConsumptionService {
  create(createRegionConsumptionDto: CreateRegionConsumptionDto) {
    return 'This action adds a new regionConsumption';
  }

  findAll() {
    return `This action returns all regionConsumption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} regionConsumption`;
  }

  update(id: number, updateRegionConsumptionDto: UpdateRegionConsumptionDto) {
    return `This action updates a #${id} regionConsumption`;
  }

  remove(id: number) {
    return `This action removes a #${id} regionConsumption`;
  }
}
