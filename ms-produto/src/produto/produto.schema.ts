import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';
import { Document } from 'mongoose';
import { IProduto } from './produto.interface';

@Schema({ collection: 'produto' })
export class Produto implements IProduto {
  @Prop({ type: ObjectID, required: true, })
  _id: String;

  @Prop({ type: String, required: true })
  sku: String;

  @Prop({ type: String, required: true })
  nome: String;

  @Prop({ type: String, required: true })
  descricao: String;

  @Prop({ type: Number, required: true })
  preco: Number;

  @Prop({ type: Date, required: true })
  createdAt: Date;
}

export type ProdutoDocument = Produto & Document;
export const ProdutoSchema = SchemaFactory.createForClass(Produto);