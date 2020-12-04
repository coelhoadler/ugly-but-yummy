import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';
import { Document } from 'mongoose';
import { DadosBancarios } from '../dadosBancarios/dadosBancarios.schema';
import { Endereco } from '../endereco/endereco.schema';

@Schema({ collection: 'fornecedor' })
export class Fornecedor {
  @Prop({ type: ObjectID, required: true, })
  _id: String;

  @Prop({ type: String, required: false })
  uid: String;

  @Prop({ type: String, required: true })
  nome: String;

  @Prop({ type: String, required: true })
  doc: String;

  @Prop({ type: Endereco, required: true })
  endereco: Endereco
  
  @Prop({ type: DadosBancarios, required: true })
  dadosBancarios: DadosBancarios

  @Prop({ type: String, required: true })
  telefone: String;

  @Prop({ type: String, required: true })
  email: String;

  @Prop({ type: [String], required: true })
  produtos: String[];

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export type FornecedorDocument = Fornecedor & Document;
export const FornecedorSchema = SchemaFactory.createForClass(Fornecedor);