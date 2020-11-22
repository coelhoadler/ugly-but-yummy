import { Module } from '@nestjs/common';
import { FornecedorService } from './fornecedor.service';
import { AppController } from '../app.controller';
import { ConnectionService } from 'src/config/conection.service';
import UniqueGenerator from '../utils/unique.generator';
import { SlackService } from './../shared/services/slack.service'

@Module({
  imports: [
    ConnectionService.Development.forRoot(),
    ConnectionService.Development.forFeature(),
  ],
  controllers: [AppController],
  providers: [FornecedorService, UniqueGenerator, SlackService]
})
export class FornecedorModule { }