import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
import { CommandModule } from 'nestjs-command';

@Module({
  imports: [
    ProdutoModule,
    CommandModule
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
