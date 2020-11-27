import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { PedidoDto } from './pedido/pedido.dto';
import { PedidoService } from './pedido/pedido.service'

@Controller()
export class AppController {
  constructor(
    private pedidoService: PedidoService
  ) {

  }

  @Get("/pedido")
  async index() {
    return await this.pedidoService.findAll();
  }

  @Get("/pedido/:id")
  async indexById(id: any) {
    return await this.pedidoService.findById(id);
  }

  @Get("/pedido/by/:prop/:propValue")
  async indexBy(prop: string, propValue: string) : Promise<PedidoDto[]> {
    return await this.pedidoService.findBy(prop, propValue);
  }

  @Post('/pedido')
  async create(@Body() pedido: PedidoDto) {
    return await this.pedidoService.create(pedido);
  }

  @Put('/pedido/:id')
  async update(id: any, @Body() pedido: PedidoDto) {
    return await this.pedidoService.update(id, pedido);
  }

  @Delete('/pedido/:id')
  async delete(id: any) {
    return await this.pedidoService.delete(id);
  }
}
