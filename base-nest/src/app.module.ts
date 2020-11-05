import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FornecedorModule } from './fornecedor/fornecedorModule';
@Module({
  imports: [
    FornecedorModule
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}