import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { ProdutoService } from './produto.service';
import { AppController } from '../app.controller';
import { ProdutoSeed } from '../seed/produto.seed';
import { ConnectionService } from 'src/config/conection.service';
import UniqueGenerator from '../utils/unique.generator';
import { SlackService } from './../shared/services/slack.service';

@Module({
  imports: [
    CommandModule,
    ConnectionService.Development.forRoot(),
    ConnectionService.Development.forFeature(),
  ],
  controllers: [AppController],
  providers: [ProdutoService, UniqueGenerator, ProdutoSeed, SlackService],
  exports: [ProdutoSeed]
})
export class ProdutoModule { }