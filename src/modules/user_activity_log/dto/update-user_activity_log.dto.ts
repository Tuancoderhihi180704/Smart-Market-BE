import { PartialType } from '@nestjs/mapped-types';
import { CreateUserActivityLogDto } from './create-user_activity_log.dto';

export class UpdateUserActivityLogDto extends PartialType(CreateUserActivityLogDto) {}
