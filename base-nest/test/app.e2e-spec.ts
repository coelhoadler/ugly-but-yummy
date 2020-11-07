import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

import { defineFeature, loadFeature } from 'jest-cucumber';

import { FornecedorDto } from '../src/fornecedor/fornecedor.dto';
import { FornecedorModule } from '../src/fornecedor/fornecedor.module';

const feature = loadFeature('./features/fornecedor.feature');

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, FornecedorModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
});

defineFeature(feature, test => {
  let app: INestApplication;
  let fornecedor = new FornecedorDto();

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, FornecedorModule],
    }).compile();

    fornecedor.sobrenome = "CREATED_BY_TESTS"

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // CREATE
  test('Criar um novo fornecedor', async ({ given, when, then }) => {
    given('que eu esteja conectado ao micro-serviço', async () => {
      expect(app).toBeTruthy();
    });

    when(/^eu entrar com o (.*) de um fornecedor$/, (nomeFornecedor) => {
      fornecedor.nome = nomeFornecedor;
    });

    then('quero que o sistema crie um novo fornecedor', async () => {
      return request(app.getHttpServer())
        .post('/').send(fornecedor)
        .expect(201);
    });
  });

  // SELECT
  test('Seleciona um fornecedor que foi cadastrado', async ({ given, when, then }) => {
    given('que eu esteja conectado ao micro-serviço', async () => {
      expect(app).toBeTruthy();
    });

    when(/^eu digite o (.*) de um fornecedor existente$/, (nomeFornecedor) => {
      fornecedor.nome = nomeFornecedor;
    });

    then('quero fornecedor exista', () => {
      return request(app.getHttpServer())
        .get('/').query({
          nome: fornecedor.nome
        }).expect(200);
    });

    // UPDATE
    test('Edita um fornecedor que foi cadastrado', async ({ given, when, and, then }) => {
      let fornecedorId;

      given('que eu esteja conectado ao micro-serviço', async () => {
        expect(app).toBeTruthy();
      });

      when(/^eu digite o (.*) para buscar o fornecedor cadastrado$/, async (nomeFornecedor) => {
        const umFornecedor = await request(app.getHttpServer())
          .get('/').query({
            nome: fornecedor.nome
          });

        fornecedorId = JSON.parse(umFornecedor.text)['_id'];
      });

      and(/^ao encontrar, altere o nome para (.*)$/, (fornecedorNovoNome) => {
        fornecedor.nome = fornecedorNovoNome;
      });

      then('tenha sucesso na alteração', () => {
        return request(app.getHttpServer())
          .put(`/${fornecedorId}`).send(fornecedor).expect(200);
      });
    });

    // DELETE
    test('Deleta um fornecedor que foi cadastrado', async ({ given, when, then }) => {
      given('que eu esteja conectado ao micro-serviço', async () => {
        expect(app).toBeTruthy();
      });

      when(/^eu digite o (.*) de um fornecedor existente$/, (nomeFornecedor) => {
        fornecedor.nome = `${nomeFornecedor}_edited`;
      });

      then('quero deletar o fornecedor', async () => {
        const umFornecedor = await request(app.getHttpServer())
          .get('/').query({
            nome: fornecedor.nome
          });

        const fornecedorID = JSON.parse(umFornecedor.text)['_id'];

        return request(app.getHttpServer())
          .delete(`/${fornecedorID}`).expect(200);
      });
    });
  });

});

