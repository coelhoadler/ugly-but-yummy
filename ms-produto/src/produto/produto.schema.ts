import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';
import { Document } from 'mongoose';
import { IProduto } from './produto.interface';

@Schema({ collection: 'produto' })
export class Produto implements IProduto {
  @Prop({ type: ObjectID, required: true, })
  _id: string;

  @Prop({ type: String, required: true })
  sku: string;

  @Prop({ type: String, required: true })
  nome: string;

  @Prop({ type: String, required: true })
  descricao: string;

  @Prop({ type: Number, required: true })
  preco: number;

  @Prop({ type: Date, required: true })
  createdAt: Date;
}

export type ProdutoDocument = Produto & Document;
export const ProdutoSchema = SchemaFactory.createForClass(Produto);