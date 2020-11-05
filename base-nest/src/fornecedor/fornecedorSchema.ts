import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema()
export class Fornecedor {
  @Prop()
  name: string;

  @Prop()
  sobrenome: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export type FornecedorDocument = Fornecedor & Document;

export const FornecedorSchema = SchemaFactory.createForClass(Fornecedor);