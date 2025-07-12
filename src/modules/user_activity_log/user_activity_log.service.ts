import { Injectable } from '@nestjs/common';
import { CreateUserActivityLogDto } from './dto/create-user_activity_log.dto';
import { UpdateUserActivityLogDto } from './dto/update-user_activity_log.dto';

@Injectable()
export class UserActivityLogService {
  create(createUserActivityLogDto: CreateUserActivityLogDto) {
    return 'This action adds a new userActivityLog';
  }

  findAll() {
    return `This action returns all userActivityLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userActivityLog`;
  }

  update(id: number, updateUserActivityLogDto: UpdateUserActivityLogDto) {
    return `This action updates a #${id} userActivityLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} userActivityLog`;
  }
}
