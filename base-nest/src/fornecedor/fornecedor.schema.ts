import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema({
  collection: 'fornecedor',
})
export class Fornecedor {
  @Prop()
  nome: string;

  @Prop()
  sobrenome: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export type FornecedorDocument = Fornecedor & Document;
export const FornecedorSchema = SchemaFactory.createForClass(Fornecedor);