import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/modules/users/schemas/user.schema';

export type SupportRequestDocument = HydratedDocument<SupportRequest>;

@Schema({ timestamps: true })
export class SupportRequest {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
  user: mongoose.Schema.Types.ObjectId; // 🔗 Ref tới User

  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: 'pending' })
  status: string;
}

export const SupportRequestSchema = SchemaFactory.createForClass(SupportRequest);
