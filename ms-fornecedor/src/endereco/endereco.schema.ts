import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Endereco {
  cep: String;
  rua: String;
  numero: String;
  complemento: String;
  cidade: String;
  uf: String;
}

export type EnderecoDocument = Endereco & Document;

export const EnderecoSchema = SchemaFactory.createForClass(Endereco);
