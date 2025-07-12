import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/modules/users/schemas/user.schema';

export type AIRecommendationDocument = HydratedDocument<AIRecommendation>;

@Schema({ timestamps: true })
export class AIRecommendation {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
  user: mongoose.Schema.Types.ObjectId; // 🔗 Ref tới User

  @Prop({ required: true })
  product_name: string;

  @Prop()
  reason: string;

  @Prop()
  suggested_quantity: number;
}

export const AIRecommendationSchema = SchemaFactory.createForClass(AIRecommendation);
