import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { FornecedorDto } from './fornecedor/fornecedor.dto';
import { FornecedorService } from './fornecedor/fornecedorService';

@Controller()
export class AppController {
  constructor(
    private _fornecedorService: FornecedorService
  ) { }

  @Get()
  index(@Res() res) {
    const fornecedoresFindAll = this._fornecedorService.findAll();

    fornecedoresFindAll.then(results => {
      return res.status(HttpStatus.OK).json(results);
    })
    .catch(error => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error));
  }

  @Post()
  create(@Body() fornecedor: FornecedorDto) {

    console.log(fornecedor);

    const fornecedorCreate = this._fornecedorService.create(fornecedor);

    return fornecedorCreate.then(fornecedor => {
      return fornecedor;
    })
  }

  @Put(':id')
  update(@Param('id') idFornecedor) {
    throw new Error("Implementar update...");
  }

  @Delete('/:id')
  delete(@Param('id') idFornecedor) {
    this._fornecedorService.delete(idFornecedor).then(result => {
      console.log('deletado', result)
    })
    return 'Deletando fornecedor...';
  }

}
