import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { FornecedorService } from './fornecedor/fornecedor.service';
import { FornecedorDto } from './fornecedor/fornecedor.dto';
import { MongooseModule } from '@nestjs/mongoose';
import { Fornecedor, FornecedorSchema } from './fornecedor/fornecedor.schema';
import { FornecedorBuilder } from './fornecedor/fornecedor.builder';
import { EnderecoBuilder } from './endereco/endereco.builder';
import { DadosBancariosBuilder } from './dadosBancarios/dadosBancarios.builder';
import UniqueGenerator from './utils/unique.generator';

const feature = loadFeature('./features/fornecedor.feature');
const prepareBefore = async () => {
  const app: TestingModule = await Test.createTestingModule({
    imports: [
      MongooseModule.forRoot("mongodb+srv://w1gA77GNyv0gBlum:uglybutyummy123@cluster0.sdiq5.mongodb.net/uglybutyummy-dbtest?retryWrites=true&w=majority", {
        connectionName: 'fornecedor',
        useNewUrlParser: true,
        useUnifiedTopology: true
      }),
      MongooseModule.forFeature([{ name: Fornecedor.name, schema: FornecedorSchema }], 'fornecedor'),
    ],
    controllers: [AppController],
    providers: [FornecedorService],
  }).compile();

  return await app.get<AppController>(AppController);
}

describe('Micro Serviço - Fornecedor', () => {

  let appController: AppController;

  beforeEach(async () => {
    appController = await prepareBefore();
  });

  describe('AppController', () => {
    it('Preparar controlador da aplicação', () => {
      expect(appController).toBeDefined();
    });
  });

  defineFeature(feature, test => {

    let appController: AppController;

    beforeEach(async () => {
      appController = await prepareBefore();
    });

    let fornecedorBuilder = new FornecedorBuilder();
    let enderecoBuilder = new EnderecoBuilder();
    let dadosBancariosBuilder = new DadosBancariosBuilder();

    var produtos = ['Batata', 'Cenoura', 'Alface'];

    enderecoBuilder
      .setCep('99999-999')
      .setRua('Rua Padre Tito')
      .setNumero('1070')
      .setComplemento('Apto 99')
      .setCidade('São Paulo')
      .setUf('SP');

    dadosBancariosBuilder
      .setAg('0001')
      .setCc('9999-9')
      .setNomeBanco('Rabobank');

    fornecedorBuilder
      .setUid(UniqueGenerator.generateUniqueId())
      .setDoc('000.000.001.91')
      .setTelefone('99999-9999')
      .setEmail('mail@mail.com')
      .setProdutos(produtos)
      .setEndereco(enderecoBuilder.build())
      .setDadosBancarios(dadosBancariosBuilder.build());

    test('Criar um novo Fornecedor', ({ given, when, then }) => {
      given('que eu esteja conectado ao micro-serviço', async () => {
      });

      when(/^eu entrar com o (.*) de um Fornecedor$/, async (nome) => {
        fornecedorBuilder.setNome(nome);
      });

      then('quero que o sistema crie um novo Fornecedor', async () => {
        const fornecedor = await appController.create(fornecedorBuilder.build());
        expect(fornecedor.uid).toBeDefined();
      });
    });


    test('Seleciona um Fornecedor que foi cadastrado', ({ given, when, then }) => {
      let nomeTeste = '';

      given('que eu tenha fornecedores cadastrados', async () => {

      });

      when(/^eu digitar o (.*) de um Fornecedor existente$/, async (nome) => {
        nomeTeste = nome;
      });

      then('quero que o Fornecedor exista', async () => {
        const fornecedor = await appController.indexBy('nome', nomeTeste);
        expect(fornecedor).toBeDefined();
        expect(fornecedor.length > 0).toBeTruthy();
      });
    });

    test('Edita um Fornecedor que foi cadastrado', ({ given, when, and, then }) => {
      let fornecedorCadastrado: FornecedorDto[];
      let novoNomeTeste;

      given('que eu tenha fornecedores cadastrados', () => {

      });

      when(/^eu digitar o (.*), buscar o fornecedor cadastrado$/, async (nome) => {
        fornecedorCadastrado = await appController.indexBy('nome', nome);
      });

      and(/^ao encontrar, altere o nome para (.*)$/, async (novoNome) => {
        novoNomeTeste = novoNome;
        fornecedorCadastrado.forEach(async (_) => {
          _.nome = novoNomeTeste;
          await appController.update(_._id, _);
        });
      });

      then('tenha sucesso na alteração', async () => {
        const novoFornecedor = await appController.indexBy('nome', novoNomeTeste);
        expect(novoFornecedor.length > 0).toBeTruthy();
      });
    });

    test('Deleta um Fornecedor que foi cadastrado', ({ given, when, then }) => {
      let nomeTeste = '';

      given('que eu tenha fornecedores cadastrados', () => {

      });

      when(/^eu digitar o (.*) de um fornecedor existente$/, (nome) => {
        nomeTeste = nome;
      });

      then('quero deletar o Fornecedor', async () => {
        const fornecedor = await appController.indexBy('nome', nomeTeste);
        fornecedor.forEach(async (_) => {
          expect(await appController.delete(_._id)).toBeGreaterThan(0);
        });
      });
    });

  });

});

