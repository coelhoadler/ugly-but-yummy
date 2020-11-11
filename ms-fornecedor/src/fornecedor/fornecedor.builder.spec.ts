import { Test } from '@nestjs/testing';
import { FornecedorBuilder } from './fornecedor.builder';

describe('FornecedorBuilder', () => {
    let fornecedorBuilder: FornecedorBuilder;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [FornecedorBuilder], // Add
            controllers: [], // Add
            providers: [],   // Add
        }).compile();

        fornecedorBuilder = moduleRef.get<FornecedorBuilder>(FornecedorBuilder);
    });

    it('Deve estar definido', () => {
        expect(fornecedorBuilder).toBeDefined();
    });

    it('Deve definir o nome de um fornecedor', () => {
        fornecedorBuilder.setNome('TESTE');
        expect(fornecedorBuilder.build().nome).toEqual('TESTE');
    });
});
