import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Order } from 'src/modules/orders/schemas/order.schema';
import { Product } from 'src/modules/products/schemas/product.shema';

export type OrderDetailDocument = HydratedDocument<OrderDetail>;

@Schema()
export class OrderDetail {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Order.name, required: true })
  order: mongoose.Schema.Types.ObjectId; // 🔗 Ref tới Order

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Product.name, required: true })
  product: mongoose.Schema.Types.ObjectId; // 🔗 Ref tới Product

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  price: number;
}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);
