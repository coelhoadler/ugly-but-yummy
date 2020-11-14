import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';

import { ProdutoService } from './produto.service';
import { Produto, ProdutoSchema } from './produto.schema';
import { AppController } from '../app.controller';
import { ProdutoSeed } from '../seed/produto.seed';

import UniqueGenerator from '../utils/unique.generator';

@Module({
  imports: [
    CommandModule,
    MongooseModule.forRoot("mongodb+srv://w1gA77GNyv0gBlum:uglybutyummy123@cluster0.sdiq5.mongodb.net/uglybutyummy?retryWrites=true&w=majority", {
      connectionName: 'produto',
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    MongooseModule.forFeature([{ name: Produto.name, schema: ProdutoSchema }], 'produto'),
  ],
  controllers: [AppController],
  providers: [ProdutoService, UniqueGenerator, ProdutoSeed],
  exports: [ProdutoSeed]
})
export class ProdutoModule { }