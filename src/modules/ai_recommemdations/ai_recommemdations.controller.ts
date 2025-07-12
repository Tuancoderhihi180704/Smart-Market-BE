import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AiRecommemdationsService } from './ai_recommemdations.service';
import { CreateAiRecommemdationDto } from './dto/create-ai_recommemdation.dto';
import { UpdateAiRecommemdationDto } from './dto/update-ai_recommemdation.dto';

@Controller('ai-recommemdations')
export class AiRecommemdationsController {
  constructor(private readonly aiRecommemdationsService: AiRecommemdationsService) {}

  @Post()
  create(@Body() createAiRecommemdationDto: CreateAiRecommemdationDto) {
    return this.aiRecommemdationsService.create(createAiRecommemdationDto);
  }

  @Get()
  findAll() {
    return this.aiRecommemdationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aiRecommemdationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAiRecommemdationDto: UpdateAiRecommemdationDto) {
    return this.aiRecommemdationsService.update(+id, updateAiRecommemdationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aiRecommemdationsService.remove(+id);
  }
}
