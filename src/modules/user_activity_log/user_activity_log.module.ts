import { Module } from '@nestjs/common';
import { UserActivityLogService } from './user_activity_log.service';
import { UserActivityLogController } from './user_activity_log.controller';

@Module({
  controllers: [UserActivityLogController],
  providers: [UserActivityLogService],
})
export class UserActivityLogModule {}
