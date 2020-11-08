import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';
import { Document } from 'mongoose';
import { DadosBancarios } from '../dadosBancarios/dadosBancarios.schema';
import { Endereco } from '../endereco/endereco.schema';

@Schema({ collection: 'consumidor' })
export class Consumidor {
  @Prop({ type: ObjectID, required: true, })
  _id: String;
  @Prop({ type: String, required: true })
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
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export type ConsumidorDocument = Consumidor & Document;
export const ConsumidorSchema = SchemaFactory.createForClass(Consumidor);