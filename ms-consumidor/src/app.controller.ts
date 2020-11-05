import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { IConsumidor } from './models/consumidor.model';
import { ConsumidorService } from './services/consumidor.service'

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private consumidorService: ConsumidorService
  ) {

  }

  // @Get("/consumidor/:id")
  // index(id: String) {
  //   return this.consumidorService.Buscar(id);
  // }

  @Get("/consumidor")
  index() {
    return this.consumidorService.Buscar(null);
  }

  @Get("/consumidor/:id")
  indexById(id: string) {
    return this.consumidorService.Buscar(id);
  }

  @Post('/consumidor')
  async create(@Body() consumidor: IConsumidor) {
    console.log(consumidor);
    return await this.consumidorService.Criar(consumidor);
  }

  @Put()
  update() {
    throw new Error("Implementar update...");
  }

  @Delete()
  delete() {
    
  }
  getHello() {
    return this.appService.getHello();
  }
}
