import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { FornecedorService } from './schemas/fornecedor/fornecedorService';

@Controller()
export class AppController {
  constructor(
    private _fornecedorService: FornecedorService
  ) { }

  @Get()
  index() {
    const res = this._fornecedorService.findAll();
    console.log('retorno find all', res);
  }

  @Post()
  create() {
    throw new Error("Implementar create...");
  }

  @Put()
  update() {
    throw new Error("Implementar update...");
  }

  @Delete()
  delete() {
    throw new Error("Implementar delete...");
  }

}
