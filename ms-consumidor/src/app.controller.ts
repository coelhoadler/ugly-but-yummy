import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import { ConsumidorDto } from './consumidor/consumidor.dto';
import { ConsumidorService } from './consumidor/consumidor.service'

@Controller()
export class AppController {
  constructor(
    private consumidorService: ConsumidorService
  ) { }

  @Get("/consumidor")
  async index() {
    return await this.consumidorService.findAll();
  }

  @Get("/consumidor/:id")
  async indexById(@Param('id') id: any) {
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
  async update(@Param('id') id: any, @Body() consumidor: ConsumidorDto) {
    return await this.consumidorService.update(id, consumidor);
  }

  @Delete('/consumidor/:id')
  async delete(@Param('id') id) {
    return await this.consumidorService.delete(id);
  }
  
}
