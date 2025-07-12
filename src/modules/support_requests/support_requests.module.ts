import { Module } from '@nestjs/common';
import { SupportRequestsService } from './support_requests.service';
import { SupportRequestsController } from './support_requests.controller';

@Module({
  controllers: [SupportRequestsController],
  providers: [SupportRequestsService],
})
export class SupportRequestsModule {}
