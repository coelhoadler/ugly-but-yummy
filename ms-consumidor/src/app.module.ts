import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppService } from './app.service';
import { ConsumidorModule } from './consumidor/consumidor.module';
@Module({
  imports: [
    ConsumidorModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger')
    }),    
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
