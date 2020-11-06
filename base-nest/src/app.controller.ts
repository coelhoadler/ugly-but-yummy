import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { FornecedorDto } from './fornecedor/fornecedor.dto';
import { FornecedorService } from './fornecedor/fornecedor.service';

@Controller()
export class AppController {
  constructor(
    private _fornecedorService: FornecedorService
  ) { }

  @Get('findByFilter')
  async findByFilter(@Res() res, @Query() query) {
    this._fornecedorService.findOne({name: query.nome}).then(result => {
      return res.status(HttpStatus.OK).json(result);
    })
    .catch(error => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error));
  }

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
