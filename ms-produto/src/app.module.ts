import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
@Module({
  imports: [
    ProdutoModule
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
