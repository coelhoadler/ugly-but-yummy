import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionService } from './config/conection.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    ConnectionService
  ],
})
export class AppModule {}