import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { PedidoService } from '../pedido/pedido.service';
import { PedidoBuilder } from '../pedido/pedido.builder';


@Injectable()
export class PedidoSeed {
    constructor(
        private readonly pedidoService: PedidoService,
    ) { }

    @Command({ command: 'create:products', describe: 'Cria pedidos "seed"', autoExit: true })
    async create() {
        const builder = new PedidoBuilder();

        const pedido = await this.pedidoService.create(
            builder
            .setConsumidorId('consumidorId')
            .setDescricao('Descrição')
            .setEndereco('Endereço Qualquer, 999 - Diadema SP')
            .setTotalPedido(99.99)
            .setValorFrete(7.45)
            .setProdutosIds(['produto 1'])
            .build()
        );
        console.log(pedido);
    }
}