import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ConnectionService } from './config/conection.service'
import FornecedorSchema from './models/FornecedorSchema';

@Controller()
export class AppController {
  constructor(
    private readonly connService: ConnectionService
    ) {
      this.connService.connection.then(teste => {
        console.log('count', FornecedorSchema.find({ 'name': 'João' }, count => {
          console.log('meu count', count)
        }))
      });
    }

  @Get()
  index() {
    throw new Error("Implementar index...");
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
