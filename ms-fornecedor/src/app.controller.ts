import { Controller, Delete, Get, Post, Put, Body, Param, Patch } from '@nestjs/common';
import { FornecedorBuilder } from './fornecedor/fornecedor.builder';
import { FornecedorDto } from './fornecedor/fornecedor.dto';
import { FornecedorService } from './fornecedor/fornecedor.service'

@Controller()
export class AppController {
  constructor(
    private fornecedorService: FornecedorService
  ) { }

  @Get("/fornecedor")
  async index() {
    return await this.fornecedorService.findAll();
  }

  @Get("/fornecedor/:id")
  async indexById(@Param('id') id) {
    return await this.fornecedorService.findById(id);
  }

  @Get("/fornecedor/by/:prop/:propValue")
  async indexBy(@Param('prop') prop: string, @Param('propValue') propValue: string): Promise<FornecedorDto[]> {
    return await this.fornecedorService.findBy(prop, propValue);
  }

  @Post('/fornecedor')
  async create(@Body() fornecedor: FornecedorDto) {
    const builder = new FornecedorBuilder();
    builder
      .setDadosBancarios(fornecedor.dadosBancarios)
      .setDoc(fornecedor.doc)
      .setEmail(fornecedor.email)
      .setEndereco(fornecedor.endereco)
      .setNome(fornecedor.nome)
      .setProdutos(fornecedor.produtos)
      .setTelefone(fornecedor.telefone);
    return await this.fornecedorService.create(builder.build());
  }

  @Put('/fornecedor/:id')
  async put(@Param('id') id: any, @Body() fornecedor: FornecedorDto) {
    return await this.update(id, fornecedor);
  }

  @Patch('/fornecedor/:id')
  async patch(@Param('id') id: any, @Body() fornecedor: FornecedorDto) {
    return await this.update(id, fornecedor);
  }

  async update(id, fornecedor: FornecedorDto) {
    const builder = new FornecedorBuilder(id);
    builder
      .setDadosBancarios(fornecedor.dadosBancarios)
      .setDoc(fornecedor.doc)
      .setEmail(fornecedor.email)
      .setEndereco(fornecedor.endereco)
      .setNome(fornecedor.nome)
      .setProdutos(fornecedor.produtos)
      .setTelefone(fornecedor.telefone);
    return await this.fornecedorService.update(id, builder.build());
  }

  @Delete('/fornecedor/:id')
  async delete(@Param('id') id) {
    return await this.fornecedorService.delete(id);
  }
}
