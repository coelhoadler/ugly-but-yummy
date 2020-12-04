import { Controller, Delete, Get, Post, Put, Body, Param, Patch } from '@nestjs/common';
import { ConsumidorBuilder } from './consumidor/consumidor.builder';
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
  async indexBy(@Param('prop') prop: string, @Param('propValue') propValue: string): Promise<ConsumidorDto[]> {
    return await this.consumidorService.findBy(prop, propValue);
  }

  @Post('/consumidor')
  async create(@Body() consumidor: ConsumidorDto) {
    const builder = new ConsumidorBuilder();
    builder
      .setDadosBancarios(consumidor.dadosBancarios)
      .setDoc(consumidor.doc)
      .setEmail(consumidor.email)
      .setEndereco(consumidor.endereco)
      .setNome(consumidor.nome)
      .setTelefone(consumidor.telefone);
    return await this.consumidorService.create(builder.build());
  }

  @Put('/consumidor/:id')
  async put(@Param('id') id: any, @Body() consumidor: ConsumidorDto) {
    return await this.update(id, consumidor);
  }

  @Patch('/consumidor/:id')
  async patch(@Param('id') id: any, @Body() consumidor: ConsumidorDto) {
    return await this.update(id, consumidor);
  }

  async update(id: any, consumidor: ConsumidorDto) {
    const builder = new ConsumidorBuilder(id);
    builder
      .setDadosBancarios(consumidor.dadosBancarios)
      .setDoc(consumidor.doc)
      .setEmail(consumidor.email)
      .setEndereco(consumidor.endereco)
      .setNome(consumidor.nome)
      .setTelefone(consumidor.telefone);
    return await this.consumidorService.update(id, builder.build());
  }

  @Delete('/consumidor/:id')
  async delete(@Param('id') id) {
    return await this.consumidorService.delete(id);
  }

}
