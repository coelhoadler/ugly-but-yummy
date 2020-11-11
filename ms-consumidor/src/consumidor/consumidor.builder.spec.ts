import { Test } from '@nestjs/testing';
import { DadosBancariosBuilder } from '../dadosBancarios/dadosBancarios.builder';
import { EnderecoBuilder } from '../endereco/endereco.builder';
import UniqueGenerator from '../utils/unique.generator';
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
        expect(consumidorBuilder.build()._id).toBeDefined();
        expect(consumidorBuilder.build().createdAt).toBeDefined();
    });

    it('Deve definir o nome de um consumidor', () => {
        const data = 'MICHEL';
        consumidorBuilder.setNome(data);
        expect(consumidorBuilder.build().nome).toEqual(data);
    });

    it('Deve definir o telefone de um consumidor', () => {
        const data = '99999-9999';
        consumidorBuilder.setTelefone(data);
        expect(consumidorBuilder.build().telefone).toEqual(data);
    });

    it('Deve definir o doc de um consumidor', () => {
        const data = '000.000.001-91';
        consumidorBuilder.setDoc(data);
        expect(consumidorBuilder.build().doc).toEqual(data);
    });

    it('Deve definir o email de um consumidor', () => {
        const data = 'mail@mail.com';
        consumidorBuilder.setEmail(data);
        expect(consumidorBuilder.build().email).toEqual(data);
    });

    it('Deve definir o uid de um consumidor', () => {
        const data = UniqueGenerator.generateUniqueId();
        consumidorBuilder.setUid(data);
        expect(consumidorBuilder.build().uid).toEqual(data);
    });

    it('Deve definir o endereco de um consumidor', () => {
        const data = new EnderecoBuilder().build();
        consumidorBuilder.setEndereco(data);
        expect(consumidorBuilder.build().endereco).toBeDefined();
    });

    it('Deve definir o dados bancarios de um consumidor', () => {
        const data = new DadosBancariosBuilder().build();
        consumidorBuilder.setDadosBancarios(data);
        expect(consumidorBuilder.build().dadosBancarios).toBeDefined();
    });
});
