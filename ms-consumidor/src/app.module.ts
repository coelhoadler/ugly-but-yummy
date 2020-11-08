import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConsumidorModule } from './consumidor/consumidor.module';
@Module({
  imports: [
    ConsumidorModule
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
