import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FornecedorService } from './fornecedorService';
import { Fornecedor, FornecedorSchema } from './FornecedorSchema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Fornecedor.name, schema: FornecedorSchema }], 'fornecedor'),
    ],
  providers: [FornecedorService],
})
export class FornecedorModule {}