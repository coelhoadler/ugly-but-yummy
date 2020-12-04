import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';

@Module({
  imports: [
    FornecedorModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger')
    }),
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
