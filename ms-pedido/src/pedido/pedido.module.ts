import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { PedidoService } from './pedido.service';
import { AppController } from '../app.controller';
import { PedidoSeed } from '../seed/pedido.seed';
import { ConnectionService } from '../config/conection.service';
import UniqueGenerator from '../utils/unique.generator';
import { SlackService } from './../shared/services/slack.service';

@Module({
  imports: [
    CommandModule,
    ConnectionService.Development.forRoot(),
    ConnectionService.Development.forFeature(),
  ],
  controllers: [AppController],
  providers: [PedidoService, UniqueGenerator, PedidoSeed, SlackService],
  exports: [PedidoSeed]
})
export class PedidoModule { }