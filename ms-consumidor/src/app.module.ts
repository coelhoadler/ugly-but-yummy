import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionService } from './config/conection.service';
import { ConsumidorService } from './services/consumidor.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    ConnectionService,
    ConsumidorService
  ],
})
export class AppModule {}
