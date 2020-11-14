import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumidorService } from './consumidor.service';
import { Consumidor, ConsumidorSchema } from './consumidor.schema';
import { AppController } from '../app.controller';
import UniqueGenerator from '../utils/unique.generator';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://startupabkm:3XU1tYrdyTH0dwvh@project01db.med08.mongodb.net/uglybutyummy?retryWrites=true&w=majority", {
      connectionName: 'consumidor',
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    MongooseModule.forFeature([{ name: Consumidor.name, schema: ConsumidorSchema }], 'consumidor'),
  ],
  controllers: [AppController],
  providers: [ConsumidorService, UniqueGenerator]
})
export class ConsumidorModule { }