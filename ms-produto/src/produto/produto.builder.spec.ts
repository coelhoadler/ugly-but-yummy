import { Test } from '@nestjs/testing';
import UniqueGenerator from '../utils/unique.generator';
import { ProdutoBuilder } from './produto.builder';

describe('ProdutoBuilder', () => {
    let produtoBuilder: ProdutoBuilder;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [ProdutoBuilder], // Add
            controllers: [], // Add
            providers: [],   // Add
        }).compile();

        produtoBuilder = moduleRef.get<ProdutoBuilder>(ProdutoBuilder);
    });

    it('Deve estar definido', () => {
        expect(produtoBuilder).toBeDefined();
        expect(produtoBuilder.build()._id).toBeDefined();
        expect(produtoBuilder.build().createdAt).toBeDefined();
    });

    it('Deve definir o nome de um produto', () => {
        const data = 'MICHEL';
        produtoBuilder.setNome(data);
        expect(produtoBuilder.build().nome).toEqual(data);
    });

    it('Deve definir o sku de um produto', () => {
        const data = UniqueGenerator.generateUniqueId();
        produtoBuilder.setSku(data);
        expect(produtoBuilder.build().sku).toEqual(data);
    });

    it('Deve definir o preço de um produto', () => {
        const data = 90.99;
        produtoBuilder.setPreco(data);
        expect(produtoBuilder.build().preco).toEqual(data);
    });
});
