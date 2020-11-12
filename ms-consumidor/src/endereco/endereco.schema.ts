import { Schema, SchemaFactory } from '@nestjs/mongoose';
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

export type EnderecoDocument = Endereco & Document;

export const EnderecoSchema = SchemaFactory.createForClass(Endereco);
