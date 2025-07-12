import { Module } from '@nestjs/common';
import { AiRecommemdationsService } from './ai_recommemdations.service';
import { AiRecommemdationsController } from './ai_recommemdations.controller';

@Module({
  controllers: [AiRecommemdationsController],
  providers: [AiRecommemdationsService],
})
export class AiRecommemdationsModule {}
