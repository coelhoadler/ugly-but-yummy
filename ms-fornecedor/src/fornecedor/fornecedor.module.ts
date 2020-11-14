import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FornecedorService } from './fornecedor.service';
import { Fornecedor, FornecedorSchema } from './fornecedor.schema';
import { AppController } from '../app.controller';
import UniqueGenerator from '../utils/unique.generator';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://startupabkm:3XU1tYrdyTH0dwvh@project01db.med08.mongodb.net/uglybutyummy?retryWrites=true&w=majority", {
      connectionName: 'fornecedor',
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    MongooseModule.forFeature([{ name: Fornecedor.name, schema: FornecedorSchema }], 'fornecedor'),
  ],
  controllers: [AppController],
  providers: [FornecedorService, UniqueGenerator]
})
export class FornecedorModule { }