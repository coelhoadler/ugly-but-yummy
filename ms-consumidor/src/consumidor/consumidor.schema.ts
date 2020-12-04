import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';
import { Document } from 'mongoose';
import { DadosBancarios } from '../dadosBancarios/dadosBancarios.schema';
import { Endereco } from '../endereco/endereco.schema';

@Schema({ collection: 'consumidor' })
export class Consumidor {
  @Prop({ type: ObjectID, required: true, })
  _id: string;
  @Prop({ type: String, required: false })
  uid: string;
  @Prop({ type: String, required: true })
  nome: string;
  @Prop({ type: String, required: true })
  doc: string;

  @Prop({ type: Endereco, required: true })
  endereco: Endereco
  
  @Prop({ type: DadosBancarios, required: true })
  dadosBancarios: DadosBancarios

  @Prop({ type: String, required: true })
  telefone: string;
  @Prop({ type: String, required: true })
  email: string;
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export type ConsumidorDocument = Consumidor & Document;
export const ConsumidorSchema = SchemaFactory.createForClass(Consumidor);