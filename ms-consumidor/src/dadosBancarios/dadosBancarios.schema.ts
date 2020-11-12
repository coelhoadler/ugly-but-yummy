import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DadosBancarios {
  ag: String
  cc: String
  nomeBanco: String
}

export type DadosBancariosDocument = DadosBancarios & Document;

export const DadosBancariosSchema = SchemaFactory.createForClass(DadosBancarios);
