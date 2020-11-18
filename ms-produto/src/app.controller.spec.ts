import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { ProdutoService } from './produto/produto.service';
import { ProdutoDto } from './produto/produto.dto';
import { ProdutoBuilder } from './produto/produto.builder';
import { ConnectionService } from './config/conection.service';
import UniqueGenerator from './utils/unique.generator';

const feature = loadFeature('./features/produto.feature');
const prepareBefore = async () => {
  const app: TestingModule = await Test.createTestingModule({
    imports: [
      ConnectionService.Tests.forRoot(),
      ConnectionService.Tests.forFeature(),
    ],
    controllers: [AppController],
    providers: [ProdutoService],
  }).compile();

  return await app.get<AppController>(AppController);
}

describe('Micro Serviço - Produto', () => {

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

    let produtoBuilder = new ProdutoBuilder();

    produtoBuilder
      .setDescricao('any product')
      .setPreco(9.99)
      .setSku(UniqueGenerator.generateUniqueId());

    test('Criar um novo Produto', ({ given, when, then }) => {
      given('que eu esteja conectado ao micro-serviço', async () => {

      });

      when(/^eu entrar com o (.*) de um Produto$/, async (nome) => {
        produtoBuilder.setNome(nome);
      });

      then('quero que o sistema crie um novo Produto', async () => {
        const produto = await appController.create(produtoBuilder.build());
        expect(produto._id).toBeDefined();
      });
    });


    test('Seleciona um Produto que foi cadastrado', ({ given, when, then }) => {
      let nomeTeste = '';

      given('que eu tenha produtos cadastrados', async () => {

      });

      when(/^eu digitar o (.*) de um Produto existente$/, async (nome) => {
        nomeTeste = nome;
      });

      then('quero que o Produto exista', async () => {
        const produto = await appController.indexBy('nome', nomeTeste);
        expect(produto).toBeDefined();
        expect(produto.length > 0).toBeTruthy();
      });
    });

    test('Edita um Produto que foi cadastrado', ({ given, when, and, then }) => {
      let produtoCadastrado: ProdutoDto[];
      let novoNomeTeste;

      given('que eu tenha produtos cadastrados', () => {

      });

      when(/^eu digitar o (.*), buscar o produto cadastrado$/, async (nome) => {
        produtoCadastrado = await appController.indexBy('nome', nome);
      });

      and(/^ao encontrar, altere o nome para (.*)$/, async (novoNome) => {
        novoNomeTeste = novoNome;
        produtoCadastrado.forEach(async (_) => {
          _.nome = novoNomeTeste;
          await appController.update(_._id, _);
        });
      });

      then('tenha sucesso na alteração', async () => {
        const novoProduto = await appController.indexBy('nome', novoNomeTeste);
        expect(novoProduto.length > 0).toBeTruthy();
      });
    });

    test('Deleta um Produto que foi cadastrado', ({ given, when, then }) => {
      let nomeTeste = '';

      given('que eu tenha produtos cadastrados', () => {

      });

      when(/^eu digitar o (.*) de um produto existente$/, (nome) => {
        nomeTeste = nome;
      });

      then('quero deletar o Produto', async () => {
        const produto = await appController.indexBy('nome', nomeTeste);
        produto.forEach(async (_) => {
          expect(await appController.delete(_._id)).toBeGreaterThan(0);
        });
      });
    });

  });

});

