import { PartialType } from '@nestjs/mapped-types';
import { CreateAiRecommemdationDto } from './create-ai_recommemdation.dto';

export class UpdateAiRecommemdationDto extends PartialType(CreateAiRecommemdationDto) {}
