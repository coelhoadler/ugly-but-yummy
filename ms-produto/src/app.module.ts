import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
import { CommandModule } from 'nestjs-command';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ProdutoModule,
    CommandModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger')
    }),
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
