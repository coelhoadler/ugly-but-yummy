import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { FornecedorDto } from './fornecedor/fornecedor.dto';
import { FornecedorService } from './fornecedor/fornecedor.service';

@Controller()
export class AppController {
  constructor(
    private _fornecedorService: FornecedorService
  ) { }

  @Get()
  index(@Res() res, @Query() query) {
    let fornecedoresResult;

    if (query && query.nome) {
      const { nome } = query;
      fornecedoresResult = this._fornecedorService.findOne({ nome })
    } else {
      fornecedoresResult = this._fornecedorService.findAll();
    }

    fornecedoresResult.then(results => {
      return res.status(HttpStatus.OK).json(results);
    })
    .catch(error => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error));
  }

  @Post()
  create(@Body() fornecedor: FornecedorDto) {
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
