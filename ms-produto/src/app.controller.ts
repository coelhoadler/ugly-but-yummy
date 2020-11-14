import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { ProdutoDto } from './produto/produto.dto';
import { ProdutoService } from './produto/produto.service'

@Controller()
export class AppController {
  constructor(
    private produtoService: ProdutoService
  ) {

  }

  @Get("/produto")
  async index() {
    return await this.produtoService.findAll();
  }

  @Get("/produto/:id")
  async indexById(id: any) {
    return await this.produtoService.findById(id);
  }

  @Get("/produto/by/:prop/:propValue")
  async indexBy(prop: string, propValue: string) : Promise<ProdutoDto[]> {
    return await this.produtoService.findBy(prop, propValue);
  }

  @Post('/produto')
  async create(@Body() produto: ProdutoDto) {
    return await this.produtoService.create(produto);
  }

  @Put('/produto/:id')
  async update(id: any, @Body() produto: ProdutoDto) {
    return await this.produtoService.update(id, produto);
  }

  @Delete('/produto/:id')
  async delete(id: any) {
    return await this.produtoService.delete(id);
  }
}
