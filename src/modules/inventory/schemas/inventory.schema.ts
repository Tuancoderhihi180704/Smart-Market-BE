import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from 'src/modules/products/schemas/product.shema';

export type InventoryDocument = HydratedDocument<Inventory>;

@Schema()
export class Inventory {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Product.name, required: true })
  product: mongoose.Schema.Types.ObjectId; // 🔗 Ref tới Product

  @Prop({ required: true })
  quantity: number;

  @Prop({ default: Date.now })
  last_updated: Date;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
