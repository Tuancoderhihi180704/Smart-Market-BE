import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from 'src/modules/products/schemas/product.shema';

export type RegionConsumptionDocument = HydratedDocument<RegionConsumption>;

@Schema()
export class RegionConsumption {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Product.name, required: true })
  product: mongoose.Schema.Types.ObjectId; // 🔗 Ref tới Product

  @Prop({ required: true })
  region: string;

  @Prop({ required: true })
  total_sales: number;

  @Prop()
  timestamp: Date;
}

export const RegionConsumptionSchema = SchemaFactory.createForClass(RegionConsumption);
