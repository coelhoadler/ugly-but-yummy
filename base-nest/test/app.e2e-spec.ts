import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

import { defineFeature, loadFeature } from 'jest-cucumber';

import { FornecedorService } from '../src/fornecedor/fornecedorService';
import { FornecedorDto } from '../src/fornecedor/fornecedor.dto';
import { FornecedorModule } from '../src/fornecedor/fornecedorModule';

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

  // it('/ (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/')
  //     .expect(200)
  //     .expect('Hello World!');
  // });
});


defineFeature(feature, test => {

  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, FornecedorModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  let fornecedor = new FornecedorDto();
  fornecedor.sobrenome = "CREATED_BY_TESTS"

  test('Criar um novo Fornecedor', ({ given, when, then }) => {
    given('que eu esteja conectado ao micro-serviço', () => {

    });

    when(/^eu entrar com o (.*) de um Fornecedor$/, (nome) => {
      fornecedor.name = nome;
    });

    then('quero que o sistema crie um novo Fornecedor', () => {
      return request(app.getHttpServer())
        .post('/').send(fornecedor)
        .expect(201);
    });
  });
});
