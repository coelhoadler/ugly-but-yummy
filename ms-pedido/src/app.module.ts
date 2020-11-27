import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PedidoModule } from './pedido/pedido.module';
import { CommandModule } from 'nestjs-command';

@Module({
  imports: [
    PedidoModule,
    CommandModule
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
