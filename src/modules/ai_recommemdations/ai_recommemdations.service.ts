import { Injectable } from '@nestjs/common';
import { CreateAiRecommemdationDto } from './dto/create-ai_recommemdation.dto';
import { UpdateAiRecommemdationDto } from './dto/update-ai_recommemdation.dto';

@Injectable()
export class AiRecommemdationsService {
  create(createAiRecommemdationDto: CreateAiRecommemdationDto) {
    return 'This action adds a new aiRecommemdation';
  }

  findAll() {
    return `This action returns all aiRecommemdations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aiRecommemdation`;
  }

  update(id: number, updateAiRecommemdationDto: UpdateAiRecommemdationDto) {
    return `This action updates a #${id} aiRecommemdation`;
  }

  remove(id: number) {
    return `This action removes a #${id} aiRecommemdation`;
  }
}
