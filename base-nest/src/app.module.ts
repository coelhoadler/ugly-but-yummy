import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FornecedorModule } from './fornecedor/fornecedor.module';
@Module({
  imports: [
    FornecedorModule
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}