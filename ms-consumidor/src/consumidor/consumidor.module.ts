import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumidorService } from './consumidor.service';
import { Consumidor, ConsumidorSchema } from './consumidor.schema';
import { AppController } from '../app.controller';
import UniqueGenerator from '../utils/unique.generator';
import { ConnectionService } from 'src/config/conection.service';


@Module({
  imports: [
    ConnectionService.Development.forRoot(),
    ConnectionService.Development.forFeature(),
  ],
  controllers: [AppController],
  providers: [ConsumidorService, UniqueGenerator]
})
export class ConsumidorModule { }