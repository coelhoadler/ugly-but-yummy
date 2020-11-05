import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { FornecedorService } from './fornecedor/fornecedorService';

@Controller()
export class AppController {
  constructor(
    private _fornecedorService: FornecedorService
  ) { }

  @Get()
  index() {
    const fornecedoresFindAll = this._fornecedorService.findAll();
    fornecedoresFindAll.then(results => {
      console.log('🚛 retorno find all', results);
      console.log('🚛 count', results.length);
      return results;
    });
    return 'buscando fornecedores...'
  }

  @Get('/create')
  create() {

    const fornecedoreCreate = this._fornecedorService.create({
      name: 'Beatriz',
      sobrenome: 'Bafini'
    });

    fornecedoreCreate.then(fornecedor => {
      console.log('👨‍🏭 fornecedor criado', fornecedor)
    })

    return 'Adicionando fornecedor...';
  }

  @Put()
  update() {
    throw new Error("Implementar update...");
  }

  @Delete('/:id')
  delete(idFornecedor) {
    this._fornecedorService.delete(idFornecedor).then(result => {
      console.log('deletado', result)
    })
    return 'Deletando fornecedor...';
  }

}
