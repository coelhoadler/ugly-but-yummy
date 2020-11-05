import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FornecedorModule } from './schemas/fornecedor/fornecedorModule';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://w1gA77GNyv0gBlum:uglybutyummy123@cluster0.sdiq5.mongodb.net/uglybutyummy?retryWrites=true&w=majority"),
    FornecedorModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
