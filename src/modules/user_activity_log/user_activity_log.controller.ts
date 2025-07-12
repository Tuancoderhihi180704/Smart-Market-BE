import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserActivityLogService } from './user_activity_log.service';
import { CreateUserActivityLogDto } from './dto/create-user_activity_log.dto';
import { UpdateUserActivityLogDto } from './dto/update-user_activity_log.dto';

@Controller('user-activity-log')
export class UserActivityLogController {
  constructor(private readonly userActivityLogService: UserActivityLogService) {}

  @Post()
  create(@Body() createUserActivityLogDto: CreateUserActivityLogDto) {
    return this.userActivityLogService.create(createUserActivityLogDto);
  }

  @Get()
  findAll() {
    return this.userActivityLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userActivityLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserActivityLogDto: UpdateUserActivityLogDto) {
    return this.userActivityLogService.update(+id, updateUserActivityLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userActivityLogService.remove(+id);
  }
}
