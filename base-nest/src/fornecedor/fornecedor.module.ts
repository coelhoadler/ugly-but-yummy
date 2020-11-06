import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FornecedorService } from './fornecedor.service';
import { Fornecedor, FornecedorSchema } from './fornecedor.schema';
import { AppController } from '../app.controller';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://w1gA77GNyv0gBlum:uglybutyummy123@cluster0.sdiq5.mongodb.net/uglybutyummy?retryWrites=true&w=majority", {
      connectionName: 'fornecedor',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: Fornecedor.name, schema: FornecedorSchema }], 'fornecedor'),
  ],
  controllers: [AppController],
  providers: [FornecedorService],
})
export class FornecedorModule { }