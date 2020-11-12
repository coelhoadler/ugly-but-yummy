import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { ConsumidorDto } from './consumidor/consumidor.dto';
import { ConsumidorService } from './consumidor/consumidor.service'

@Controller()
export class AppController {
  constructor(
    private consumidorService: ConsumidorService
  ) {

  }

  @Get("/consumidor")
  async index() {
    return await this.consumidorService.findAll();
  }

  @Get("/consumidor/:id")
  async indexById(id: any) {
    return await this.consumidorService.findById(id);
  }

  @Get("/consumidor/by/:prop/:propValue")
  async indexBy(prop: string, propValue: string) : Promise<ConsumidorDto[]> {
    return await this.consumidorService.findBy(prop, propValue);
  }

  @Post('/consumidor')
  async create(@Body() consumidor: ConsumidorDto) {
    return await this.consumidorService.create(consumidor);
  }

  @Put('/consumidor/:id')
  async update(id: any, @Body() consumidor: ConsumidorDto) {
    return await this.consumidorService.update(id, consumidor);
  }

  @Delete()
  async delete(id: any) {
    return await this.consumidorService.delete(id);
  }
}
