import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { FornecedorDto } from './fornecedor/fornecedor.dto';
import { FornecedorService } from './fornecedor/fornecedor.service'

@Controller()
export class AppController {
  constructor(
    private fornecedorService: FornecedorService
  ) {

  }

  @Get("/fornecedor")
  async index() {
    return await this.fornecedorService.findAll();
  }

  @Get("/fornecedor/:id")
  async indexById(id: any) {
    return await this.fornecedorService.findById(id);
  }

  @Get("/fornecedor/by/:prop/:propValue")
  async indexBy(prop: string, propValue: string) : Promise<FornecedorDto[]> {
    return await this.fornecedorService.findBy(prop, propValue);
  }

  @Post('/fornecedor')
  async create(@Body() fornecedor: FornecedorDto) {
    return await this.fornecedorService.create(fornecedor);
  }

  @Put('/fornecedor/:id')
  async update(id: any, @Body() fornecedor: FornecedorDto) {
    return await this.fornecedorService.update(id, fornecedor);
  }

  @Delete()
  async delete(id: any) {
    return await this.fornecedorService.delete(id);
  }
}
