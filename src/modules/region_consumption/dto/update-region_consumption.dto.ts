import { PartialType } from '@nestjs/mapped-types';
import { CreateRegionConsumptionDto } from './create-region_consumption.dto';

export class UpdateRegionConsumptionDto extends PartialType(CreateRegionConsumptionDto) {}
