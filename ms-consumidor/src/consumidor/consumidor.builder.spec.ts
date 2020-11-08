import { Test } from '@nestjs/testing';
import { ConsumidorBuilder } from './consumidor.builder';

describe('ConsumidorBuilder', () => {
    let consumidorBuilder: ConsumidorBuilder;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [ConsumidorBuilder], // Add
            controllers: [], // Add
            providers: [],   // Add
        }).compile();

        consumidorBuilder = moduleRef.get<ConsumidorBuilder>(ConsumidorBuilder);
    });

    it('Deve estar definido', () => {
        expect(consumidorBuilder).toBeDefined();
    });

    it('Deve definir o nome de um consumidor', () => {
        consumidorBuilder.setNome('MICHEL');
        expect(consumidorBuilder.build().nome).toEqual('MICHEL');
    });
});
