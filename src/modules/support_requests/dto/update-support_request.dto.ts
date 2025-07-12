import { PartialType } from '@nestjs/mapped-types';
import { CreateSupportRequestDto } from './create-support_request.dto';

export class UpdateSupportRequestDto extends PartialType(CreateSupportRequestDto) {}
