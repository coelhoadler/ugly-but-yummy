import { Test } from '@nestjs/testing';
import { PedidoBuilder } from './pedido.builder';

describe('PedidoBuilder', () => {
    let pedidoBuilder: PedidoBuilder;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [PedidoBuilder], // Add
            controllers: [], // Add
            providers: [],   // Add
        }).compile();

        pedidoBuilder = moduleRef.get<PedidoBuilder>(PedidoBuilder);
    });

    it('Deve estar definido', () => {
        expect(pedidoBuilder).toBeDefined();
        expect(pedidoBuilder.build()._id).toBeDefined();
        expect(pedidoBuilder.build().createdAt).toBeDefined();
    });

    it('Deve definir uma propriedade do pedido', () => {
        const data = 'consumidorId';
        pedidoBuilder.setConsumidorId(data);
        expect(pedidoBuilder.build().consumidorId).toEqual(data);
    });
});
