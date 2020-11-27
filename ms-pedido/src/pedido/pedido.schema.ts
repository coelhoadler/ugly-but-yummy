import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';
import { Document } from 'mongoose';
import { IPedido } from './pedido.interface';

@Schema({ collection: 'pedidos' })
export class Pedido implements IPedido {
  @Prop({ type: ObjectID, required: true, })
  _id: string;
  @Prop({ type: String, required: true, })
  consumidorId: string;
  @Prop({ type: String, required: true, })
  produtosIds: string[];
  @Prop({ type: String, required: true, })
  endereco: string;
  @Prop({ type: Number, required: true, })
  valorFrete: number;
  @Prop({ type: String, required: true, })
  descricao: string;
  @Prop({ type: Number, required: true, })
  totalPedido: number;
  @Prop({ type: Date, required: true })
  createdAt: Date;
}

export type PedidoDocument = Pedido & Document;
export const PedidoSchema = SchemaFactory.createForClass(Pedido);