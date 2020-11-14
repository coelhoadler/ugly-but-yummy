import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { ProdutoService } from '../produto/produto.service';
import { ProdutoBuilder } from '../produto/produto.builder';


@Injectable()
export class ProdutoSeed {
    constructor(
        private readonly produtoService: ProdutoService,
    ) { }

    @Command({ command: 'create:products', describe: 'Cria produtos "seed"', autoExit: true })
    async create() {
        const builder = new ProdutoBuilder();

        const produto = await this.produtoService.create(
            builder
            .setNome('Console PS5')
            .setDescricao('Console de ultima geração PS5')
            .setPreco(5000.00)
            .setSku('PS5_SKU')
            .build()
        );
        console.log(produto);
    }
}