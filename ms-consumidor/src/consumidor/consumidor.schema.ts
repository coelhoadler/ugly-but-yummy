import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';

import { Document } from 'mongoose';

@Schema()
export class Endereco {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  cidade: string;
  uf: string;
}

@Schema({ collection: 'consumidor' })
export class Consumidor {
  @Prop({ type: ObjectID, required: true,  })
  _id: String;
  @Prop({ type: String, required: true })
  uid: String;
  @Prop({ type: String, required: true })
  nome: String;
  @Prop({ type: String, required: true })
  doc: String;

  @Prop({ type: Endereco, required: true })
  endereco: Endereco

  @Prop({ type: String, required: true })
  telefone: String;
  @Prop({ type: String, required: true })
  email: String;
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export type EnderecoDocument = Endereco & Document;
export type ConsumidorDocument = Consumidor & Document;

export const EnderecoSchema = SchemaFactory.createForClass(Endereco);
export const ConsumidorSchema = SchemaFactory.createForClass(Consumidor);