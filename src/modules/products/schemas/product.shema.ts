import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/modules/users/schemas/user.schema'; 

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  description: string;

  @Prop()
  category: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
  owner: mongoose.Schema.Types.ObjectId; // 🔗 Ref tới User
}

export const ProductSchema = SchemaFactory.createForClass(Product);
